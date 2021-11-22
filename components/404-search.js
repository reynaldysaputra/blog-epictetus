export default function SearchNotFound({name}){
  return (
    <div className='text-center py-20'>
      <h2 className='text-6xl'>No result 😥</h2>
      <p className='text-white/60 mt-5 text-xl w-full lg:w-6/12 mx-auto'>We couldn’t find any posts with the keyword {name}. Please try another keyword.</p>
    </div>
  )
}