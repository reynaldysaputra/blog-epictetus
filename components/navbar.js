import { useState } from "react";

export default function Navbar(){
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className='py-10'>
      <div className="w-[85%] mx-auto">
        <div className='flex items-center space-x-4'>
          <div className='w-2/12 flex items-center cursor-pointer'>
            <div className='w-10 h-10 bg-gray-500 rounded flex justify-center items-center mr-5 shadow-2xl'>E</div>
            Epictetus
          </div>
          <div className='w-8/12'>
            <ul className='flex space-x-7'>
              <li><a href="#" className='hover:underline'>UI Design</a></li>
              <li><a href="#" className='hover:underline'>Front-End</a></li>
              <li><a href="#" className='hover:underline'>Back-End</a></li>
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
          <div className='w-2/12'>
            <input 
              className='w-full px-5 py-2 text-sm bg-gray-700 outline-none rounded-full bg-search pl-10' 
              placeholder='Search..'
            />
          </div>
        </div>
      </div>
    </nav>
  )
}