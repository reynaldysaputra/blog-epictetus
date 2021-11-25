import {parseCookies} from 'nookies';
import Router from 'next/router';
import { useEffect } from 'react';

export default function NotLogging404() {
  const {tokenEpictetus} = parseCookies();

  useEffect(() => {
    if(!tokenEpictetus) {
      Router.push('/404NotLogging');
    }
  }, [])

  return <h1>404 - Page Not Found</h1>
}