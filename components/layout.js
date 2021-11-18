import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({children}) {
  return(
    <div className='bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white'>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}