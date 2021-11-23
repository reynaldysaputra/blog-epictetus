import Layout from '@/components/layout'
import 'tailwindcss/tailwind.css'
import App from 'next/app';

function MyApp({ Component, pageProps, categories }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  
  return <Layout categories={categories}>
    <Component {...pageProps} />
  </Layout>
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const reqCategories = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  const categories = await reqCategories.json();

  return{
    ...appProps,
    categories
  }
}

export default MyApp
