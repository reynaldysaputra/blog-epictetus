import SearchNotFound from "@/components/404-search";
import PostAuthor from "@/components/postAuthor";
import PostMetaTitle from "@/components/postMetaTitle";
import Head from 'next/head';
import ReactMarkdown from "react-markdown";
import nookies from 'nookies';

export async function getServerSideProps(ctx){
  const {slug} = ctx.params;
  const postReqDetail = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?slug=${slug}`);
  const postReqRes = await postReqDetail.json();

  const {tokenEpictetus} = nookies.get(ctx);

  if(!tokenEpictetus){
    return {
      redirect: {
        destination: '/login'
      }
    }    
  }
  
  return {
    props: {
      posts: postReqRes.length > 0 ? postReqRes[0] : {},
      query: slug
    }
  }
}

export default function Detail({posts, query}){   
  return(
    <>
      <Head>
        <title>{query} &mdash; Epictectus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {
        posts.title ? (
          <>
            <div className='container mx-auto md:px-10 px-10'>
              <div className='md:w-6/12 w-full mx-auto flex flex-col items-center'>
                <PostMetaTitle 
                  title={posts.title}
                  category={posts.category.name}
                  date={posts.created_at}
                  center
                />
                <PostAuthor 
                  authorName={posts.author.name}
                  authorJob={posts.author.job}
                  authorAvatar={posts.author.avatar.url}
                />
              </div>
              <div className='md:w-10/12 w-full my-10 mx-auto'>
                <img src={process.env.NEXT_PUBLIC_API_URL+posts.thumbnail.url} alt="detail-email" className='w-full rounded'/ >
              </div>
              <div className='md:w-8/12 w-full mx-auto leading-relaxed space-y-6'>
                <p className='text-xl'>{posts.headline}</p>
                <ReactMarkdown className='prose'>{posts.content}</ReactMarkdown>
              </div>
            </div>
          </>
        ) : <SearchNotFound name={query} />
      }
    </>
  )
}