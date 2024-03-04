import React, { useEffect } from 'react';
import '../styles/global.css';
import smoothscroll from 'smoothscroll-polyfill';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Inicialize o SmoothScroll
    smoothscroll.polyfill();
  }, []);

  return <Component {...pageProps} />;
}
