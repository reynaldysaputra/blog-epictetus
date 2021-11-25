import {  destroyCookie } from 'nookies'
import Router from 'next/router';

export default function Footer(){
  const Logout = () => {
    destroyCookie(null, 'tokenEpictetus');
    Router.replace('/login');
  }

  return(
    <footer className='py-10 text-center text-white/60'>
      <button className='my-5 border-2 border-gray-400 px-7' onClick={Logout}>Logout</button>
      <p>Copyright (c) 2021 - Design By Nauval & Development By Reynaldy</p>
    </footer>
  )
}