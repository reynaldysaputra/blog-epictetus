import nookies from 'nookies';

export async function getServerSideProps(ctx) {
  const {providers} = ctx.params;
  const {access_token} = ctx.query;

  const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/${providers}/callback?access_token=${access_token}`);
  const res = await req.json();

  console.log(providers);
  console.log(ctx.query);
  
  if(res.jwt){
    nookies.set(ctx, 'tokenEpictetus', res.jwt, {
      path: '/'
    })

    return {
      redirect: {
        destination: '/'
      }
    }
  }

  return {
    props: {}
  }
}

export default function Connect(){
  return(
    <>
      Hello
    </>
  )
}