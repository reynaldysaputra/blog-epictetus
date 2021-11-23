import { NextResponse } from 'next/server'

export function middleware(req, ev) {
  const {tokenEpictetus} = req.cookies;
  const tokenValid = tokenEpictetus != undefined ? true : false;

  if(tokenValid) {
    return NextResponse.redirect('/');
  }
  
  return NextResponse.next();
}