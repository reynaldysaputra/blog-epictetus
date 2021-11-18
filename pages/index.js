import CardPost from "@/components/cardPost";
import InfoPost from "@/components/infoPost";
import Layout from "@/components/layout";
import { useState } from "react"
import mockPosts from '../utils/posts.json';

export default function Home() {
  const [posts, setPosts] = useState(mockPosts);

  return (
    <Layout>
      <div className='container mx-auto px-5 md:px-10 xl:pl-0'>
        <div className='flex items-center flex-wrap -mx-4'>
          <div className='lg:w-8/12 w-full px-4'>
            <img src="/featured-thumbnail.png" alt="thumb" className='rounded-xl w-full'/>
          </div>
          <div className='lg:w-4/12 w-full px-4'>
            <InfoPost
              category='UI DESIGN'
              date='July 2, 2021'
              title='Understanding color theory: the color wheel and finding complementary colors'
              shortDescription='Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.'
              authorAvatar='/author-1.png'
              authorName='Leslie Alexander'
              authorJob='UI Design'
            />
          </div>
        </div>

        <hr className='my-10 opacity-50 md:hidden' />

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
      </div>
    </Layout>
  )
}
