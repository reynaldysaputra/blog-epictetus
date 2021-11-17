import 'tailwindcss/tailwind.css'
import Navbar from '@/components/navbar'

function MyApp({ Component, pageProps }) {
  return <>
    <div className='bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white'>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  </>
}

export default MyApp
