import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <video className="vid" src='/videos/video-1.mp4' autoPlay loop muted />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
