import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { Link } from 'react-scroll';

function MyApp({ Component, pageProps }) {
  if (typeof window === 'object') {
  // Check if document is finally loaded
   document.addEventListener("DOMContentLoaded", function () {
       alert('Finished loading')
     });
  }
  return (
    <div>
      <video className="vid" src='/videos/video-1.mp4' autoPlay loop muted />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
