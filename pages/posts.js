import CardPost from "@/components/cardPost";
import Layout from "@/components/layout";
import SectionHeader from "@/components/sectionHeaders";
import { useState } from "react";
import mockPosts from '../utils/posts.json';

export default function Posts() {
  const [posts, setPosts] = useState(mockPosts);

  return(
    <Layout>
      <div className='container mx-auto md:px-10 xl:px-0 px-0'>
        <SectionHeader>Search: UI Design</SectionHeader>
        {!posts.length ? (
          <div className='text-center py-20'>
            <h2 className='text-6xl'>No result 😥</h2>
            <p className='text-white/60 mt-5 text-xl w-full lg:w-6/12 mx-auto'>We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
          </div>
        ) : (
          <div className='flex flex-wrap -mx-4 md:mt-10 mr-0'>
            {posts.map(item => (
            <div key={item.id} className='lg:w-4/12 md:w-6/12 w-full py-4 px-4'>
              <CardPost 
                  thumbnail={item.thumbnail}
                  category={item.category}
                  date={item.date}
                  title={item.title}
                  shortDescription={item.shortDescription}
                  authorAvatar={item.authorAvatar}
                  authorName={item.authorName}
                  authorJob={item.authorJob}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}