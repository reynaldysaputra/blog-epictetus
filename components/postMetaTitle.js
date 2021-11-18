import Link from 'next/link';

export default function PostMetaTitle({category, date, title, center}) {
  return(
    <>
      <div className='flex items-center space-x-2 text-white/60'>
        <span className='mt-3 lg:mt-0'>{category}</span>
        <span className='mt-3 lg:mt-0'>&bull;</span>
        <span className='mt-3 lg:mt-0'>{date}</span>
      </div>
      <h2 className={`mt-4 text-2xl ${center ? 'text-center' : ''}`}>
        <Link href='/detail'>{title}</Link>
      </h2>
    </>
  )
}