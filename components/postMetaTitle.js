export default function PostMetaTitle({category, date, title, center}) {
  return(
    <>
      <div className='flex items-center space-x-2 text-white/60'>
        <span>{category}</span>
        <span>&bull;</span>
        <span>{date}</span>
      </div>
      <h2 className={`mt-4 text-2xl ${center ? 'text-center' : ''}`}>{title}</h2>
    </>
  )
}