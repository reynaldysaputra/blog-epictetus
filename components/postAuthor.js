export default function PostAuthor({authorAvatar, authorName, authorJob}) {
    return(
      <div className='flex mt-6'>
        <img src={authorAvatar} alt="author" className='w-12 h-12 object-cover' />
        <div className='ml-3'>
          <h5>{authorName}</h5>
          <p className='text-white/60'>{authorJob}</p>
        </div>
      </div>
    )
}