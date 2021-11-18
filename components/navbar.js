import { useState } from "react";
import Link from 'next/link';

export default function Navbar(){
  const [dropdown, setDropdown] = useState(false);
  const [offCanfas, setOffCanfas] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <nav className='py-10'>
      <div className='container mx-auto md:px-10 px-10'>
        <div className='flex items-center'>
          <div className='w-3/12 lg:hidden flex items-center'>
            <button onClick={() => setOffCanfas(!offCanfas)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
            </button>
          </div>
          <div className='w-6/12 lg:w-2/12'>
            <Link href='/'>
              <a className='flex items-center justify-center lg:justify-start cursor-pointer mx-0'>
                <div className='w-10 h-10 bg-gray-500 rounded flex justify-center items-center mr-5 shadow-2xl'>E</div>
                Epictetus
              </a>
            </Link>
          </div>
          <div className={`w-full h-full bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none fixed lg:static top-0 mx-0 z-10 lg:w-7/12 transition-all ${offCanfas ? 'left-0' : '-left-full'}`}>
            <button className='absolute top-10 right-10 lg:hidden' onClick={() => setOffCanfas(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <ul className='flex lg:space-x-7 flex-col lg:flex-row p-10 lg:p-0 space-y-4 lg:space-y-0'>
              <li><Link href="/posts"><a className='hover:underline'>UI Design</a></Link></li>
              <li><Link href="/posts"><a className='hover:underline'>Front-End</a></Link></li>
              <li><Link href="/posts"><a className='hover:underline'>Back-End</a></Link></li>
              <li className='relative'>
                <a className='hover:underline cursor-pointer flex items-center' onClick={() => setDropdown(!dropdown)}>
                  Others
                  <svg className='ml-1' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                {dropdown && (
                  <ul className='bg-gray-800 absolute mt-3 w-[150px] shadow-2xl'>
                    <li className='flex border-b-2 border-white/5 py-2 px-2 hover:bg-gray-700/60'><a href="#" className='w-full'>Internet</a></li>
                    <li className='flex border-b-2 border-white/5 py-2 px-2 hover:bg-gray-700/60'><a href="#" className='w-full'>Books</a></li>
                    <li className='flex  py-2 px-2 hover:bg-gray-700/60'><a href="#" className='w-full'>Open Source</a></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className='w-3/12 lg:hidden text-right'>
            <button onClick={() => setSearch(!search)}>
              <svg className='inline-block' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
            </button>
          </div>
          <div className={`lg:w-3/12 w-full absolute lg:static left-0 lg:block transition-all ${search ? 'top-10' : '-top-40'}`}>
            <button className='absolute top-3 right-14 lg:hidden' onClick={() => setSearch(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <input 
              className='w-full px-5 py-3 lg:py-2 text-sm bg-gray-700 outline-none rounded-lg lg:rounded-full bg-search pl-10' 
              placeholder='Search..'
            />
          </div>
        </div>
      </div>
    </nav>
  )
}