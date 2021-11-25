import { NextResponse } from 'next/server'

export function middleware(req) {
  const {tokenEpictetus} = req.cookies;
  const tokenValid = tokenEpictetus != undefined ? true : false;
  const pathname = req.url;

  if(tokenValid && pathname === '/login') {
    return NextResponse.redirect('/');
  }else if(!tokenValid && pathname === '/'){
    return NextResponse.redirect('/login');
  }  
}