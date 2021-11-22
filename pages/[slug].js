import Layout from "@/components/layout";
import PostAuthor from "@/components/postAuthor";
import PostMetaTitle from "@/components/postMetaTitle";
import Head from 'next/head';
import ReactMarkdown from "react-markdown";

export async function getServerSideProps(ctx){
  const {slug} = ctx.params;
  const postReqDetail = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?slug=${slug}`);
  const postReqRes = await postReqDetail.json();

  return {
    props: postReqRes.length > 0 ? postReqRes[0] : {}
  }
}

export default function Detail({title, category, created_at, author, thumbnail, headline, content}){
  return(
    <>
      <Head>
        <title>{title} &mdash; Epictectus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='container mx-auto md:px-10 px-10'>
        <div className='md:w-6/12 w-full mx-auto flex flex-col items-center'>
          <PostMetaTitle 
            title={title}
            category={category.name}
            date={created_at}
            center
          />
          <PostAuthor 
            authorName={author.name}
            authorJob={author.job}
            authorAvatar={author.avatar.url}
          />
        </div>
        <div className='md:w-10/12 w-full my-10 mx-auto'>
          <img src={process.env.NEXT_PUBLIC_API_URL+thumbnail.url} alt="detail-email" className='w-full rounded'/ >
        </div>
        <div className='md:w-8/12 w-full mx-auto leading-relaxed space-y-6'>
          <p className='text-xl'>{headline}</p>
          <ReactMarkdown className='prose'>{content}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}