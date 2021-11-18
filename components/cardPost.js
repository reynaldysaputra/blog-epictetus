import InfoPost from "./infoPost";

export default function CardPost({thumbnail, ...postDetail}){
  return(
    <div>
      <img src={thumbnail} alt={thumbnail} className='w-full rounded' />
      <InfoPost {...postDetail} />
    </div>
  )
}