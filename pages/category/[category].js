import SearchNotFound from "@/components/404-search";
import CardPost from "@/components/cardPost";
import SectionHeader from "@/components/sectionHeaders";
import Head from 'next/head'

export async function getServerSideProps({params: {category: categorySlug}}) {  
  const reqCategory = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories?slug=${categorySlug}`);
  const category = await reqCategory.json();

  const postReq = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?_where[category.slug]=${categorySlug}`);
  const postRes = await postReq.json();


  return {
    props: {
      category: category.length > 0 ? category[0] : categorySlug,
      posts: postRes
    }
  }
}

export default function Posts({posts, category}) {
  const categoryName = category.name ? category.name : category;

  return(
    <>
      <Head>
        <title>{categoryName} &mdash; Epictectus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='container mx-auto md:px-10 px-10'>
        <SectionHeader>Search: {categoryName}</SectionHeader>
        {!posts.length ? (
          <SearchNotFound name={categoryName} />
        ) : (
          <div className='flex flex-wrap -mx-4 md:mt-10'>
            {posts.map(item => (
            <div key={item.id} className='lg:w-4/12 md:w-6/12 py-4 px-4'>
              <CardPost {...item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}