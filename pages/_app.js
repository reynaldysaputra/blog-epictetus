import Layout from '@/components/layout'
import 'tailwindcss/tailwind.css'
import { parseCookies } from 'nookies'
import Router from 'next/router';

function MyApp({ Component, pageProps, categories }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  
  return <Layout categories={categories}>
    <Component {...pageProps} />
  </Layout>
}

const redirectRoute = (ctx, location) => {
  if(ctx.req){
    ctx.res.writeHead(307, {Location: location});
    ctx.res.end();
  }else {
    Router.push(location);
  }
}

MyApp.getInitialProps = async ({Component, ctx}) => {
  let appProps = {};

  const reqCategories = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  const categories = await reqCategories.json();

  const {tokenEpictetus} = parseCookies(ctx);

  if(Component.getInitialProps){
    appProps = await Component.getInitialProps(ctx);
  }

  // if(!tokenEpictetus){
  //   if(ctx.pathname !== '/login' && ctx.pathname !== '/register'){
  //     redirectRoute(ctx, '/login');

  //     return {
  //       ...appProps,
  //       categories,
  //     }
  //   }
  // }else if(ctx.pathname === '/login'){
  //   redirectRoute(ctx, '/');
  
    return{
      ...appProps,
      categories
    }
  // }
}

export default MyApp
