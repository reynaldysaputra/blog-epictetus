export default function InfoPost({category, date, title, shortDescription, authorAvatar,authorName, authorJob}){
  return(
    <>
      <div className='flex items-center space-x-2 text-white/60'>
        <span>{category}</span>
        <span>&bull;</span>
        <span>{date}</span>
      </div>
      <h2 className='mt-4 text-2xl'>{title}</h2>
      <p className='text-white/60 mt-6 w-10/12'>{shortDescription}</p>
      <div className='flex mt-6'>
        <img src={authorAvatar} alt="author" className='w-12 h-12 object-cover' />
        <div className='ml-3'>
          <h5>{authorName}</h5>
          <p className='text-white/60'>{authorJob}</p>
        </div>
      </div>
    </>
  )
}