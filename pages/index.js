import CardPost from "@/components/cardPost";
import InfoPost from "@/components/infoPost";
import Layout from "@/components/layout";
import { useState } from "react"
import Head from 'next/head';
import { formatDate } from "utils/utils";

export async function getServerSideProps(contex) {  
  const thumbPostReq = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?featured=true`);
  const thumbPostRes = await thumbPostReq.json();

  const postReq = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?featured_ne=true`);
  const postRes = await postReq.json();

  return {
    props: {
      thumbPost: thumbPostRes.length > 0 ? thumbPostRes[0] : false,
      posts: postRes
    }
  }
}

export default function Home({thumbPost, posts}) {
  return (
    <>
      <Head>
        <title>Home &mdash; Epictectus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='container mx-auto md:px-10 px-10'>
      {thumbPost && (
        <div className='flex items-center flex-wrap -mx-4'>
          <div className='lg:w-8/12 w-full px-4'>
            <img src={process.env.NEXT_PUBLIC_API_URL+thumbPost.thumbnail.formats.medium.url} alt="thumb" className='rounded-xl w-full'/>
          </div>
          <div className='lg:w-4/12 w-full px-4'>
            <InfoPost
              category={thumbPost.category.name}
              date={formatDate(thumbPost.published_at)}
              title={thumbPost.title}
              shortDescription={thumbPost.headline}
              authorAvatar={thumbPost.author.avatar.url}
              authorName={thumbPost.author.name}
              authorJob={thumbPost.author.job}
              slug={thumbPost.slug}
            />
          </div>
        </div>
      )}

        <hr className='my-10 opacity-50 md:hidden' />

        <div className='flex flex-wrap -mx-4 md:mt-10 mr-0'>
          {posts.map(item => (
            <div key={item.id} className='lg:w-4/12 md:w-6/12 w-full py-4 px-4'>
              <CardPost {...item} />
            </div>
          ))}
        </div> 
      </div>
    </>
  )
}
