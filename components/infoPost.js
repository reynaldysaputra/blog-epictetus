import PostAuthor from "./postAuthor";
import PostMetaTitle from "./postMetaTitle";
import Link from 'next/link';

export default function InfoPost({category, date, title, shortDescription, authorAvatar,authorName, authorJob, slug}){
  return(
    <Link href={`/${slug}`}>
      <a>
        <PostMetaTitle 
          category={category}
          date={date}
          title={title}
        />
        <p className='text-white/60 mt-6 w-10/12'>{shortDescription}</p>
        <PostAuthor
          authorAvatar={authorAvatar}
          authorName={authorName}
          authorJob={authorJob}
        />
      </a>
    </Link>
  )
}