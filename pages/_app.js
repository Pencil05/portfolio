import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // ลบคลาสสำหรับหน้าก่อนหน้า
    document.body.classList.remove('about-page', 'lab-page');

    // เพิ่มคลาส 'about-page' สำหรับหน้า About
    if (router.pathname === '/about') {
      document.body.classList.add('about-page');
    }

    // เพิ่มคลาส 'lab-page' สำหรับหน้า Lab
    if (router.pathname === '/lab') {
      document.body.classList.add('lab-page');
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}
