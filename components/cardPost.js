import InfoPost from "./infoPost";
import Link from 'next/link';
import { formatDate } from "utils/utils";

export default function CardPost(props){
  return(
    <div>
      <Link href='/detail'>
        <img 
          src={process.env.NEXT_PUBLIC_API_URL+props.thumbnail.formats.small.url} 
          alt={props.category.name} 
          className='w-full rounded' 
        />
      </Link>
      <InfoPost 
          category={props.category.name}
          date={formatDate(props.published_at)}
          title={props.title}
          shortDescription={props.headline}
          authorAvatar={process.env.NEXT_PUBLIC_API_URL+props.author.avatar.url}
          authorName={props.author.name}
          authorJob={props.author.job}
      />
    </div>
  )
}