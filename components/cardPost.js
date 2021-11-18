import InfoPost from "./infoPost";
import Link from 'next/link';

export default function CardPost({thumbnail, ...postDetail}){
  return(
    <div>
      <Link href='/detail'>
        <img src={thumbnail} alt={thumbnail} className='w-full rounded' />
      </Link>
      <InfoPost {...postDetail} />
    </div>
  )
}