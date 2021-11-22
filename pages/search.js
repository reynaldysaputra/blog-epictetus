import SearchNotFound from "@/components/404-search";
import CardPost from "@/components/cardPost";
import SectionHeader from "@/components/sectionHeaders";
import Head from 'next/head'

export async function getServerSideProps({query}) {  
  const postReq = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?title_contains=${query.q}`);
  const postRes = await postReq.json();

  return {
    props: {
      posts: postRes,
      querySearch: query.q
    }
  }
}

export default function Posts({posts, querySearch}) {
  return(
    <>
      <Head>
        <title>{querySearch} &mdash; Epictectus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='container mx-auto md:px-10 px-10'>
        <SectionHeader>Search: {querySearch}</SectionHeader>
        {!posts.length ? (
          <SearchNotFound name={querySearch} />
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