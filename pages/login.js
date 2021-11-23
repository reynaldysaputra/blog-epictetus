import Link from "next/link";
import { useState } from "react";
import { parseCookies, setCookie } from 'nookies'
import Router from "next/router";

export default function Login(params) {
  const [fields, setFields] = useState({});

  const setValue = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    })
  }

  const doLogin = async (e) => {
    e.preventDefault();
    
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/local`, {
      method: 'POST',
      body: JSON.stringify(fields),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    const res = await req.json();
    
    if(res.jwt){
      console.log('Hello success');
      e.target.reset();

      setCookie(null, 'tokenEpictetus', res.jwt, {
        maxAge: 30 * 24 * 60 * 60,
      })

      Router.replace('/');

      const cookies = parseCookies()
      console.log({ cookies })
    }
  }

  return(
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div className='flex items-center lg:justify-center cursor-pointer mx-0 my-7'>
          <div className='w-10 h-10 bg-gray-500 rounded flex justify-center items-center mr-5 shadow-2xl text-white'>E</div>
          Epictetus
        </div>  
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <form onSubmit={doLogin}>
              <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
              <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" name='identifier' onChange={setValue}/>
              <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
              <input type="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" name='password' onChange={setValue}/>
              <button type="submit" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                <span className="inline-block mr-2">Login</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-3 gap-1">
              <button type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">MailUp</button>
              <button type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Google</button>
              <button type="button" className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Github</button>
            </div>
          </div>
          <div className="py-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="text-center sm:text-left whitespace-nowrap">
                <Link href='/register'>
                  <a className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <span className="inline-block ml-1">Register</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Login.getLayout = page => (
  <>
    {page}
  </>
)