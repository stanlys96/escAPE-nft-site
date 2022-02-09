import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
// import {  } from '@fortawesome/fontawesome-svg-core';

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Image src='/images/bored-ape.png' width={70} height={70} />
          <span className={styles.logoName}>escAPE NFT</span>
        </div>
        <div>
          <a className={styles.navlink}>
            Home
          </a>
          <a className={styles.navlink}>
            About
          </a>
          <a className={styles.navlink}>
            Roadmap
          </a>
          <a className={styles.navlink}>
            Contact
          </a>
        </div>
        <a className={styles.connectWalletBtn}>CONNECT WALLET</a>
      </nav>
      <div className={styles.headerCaption}>
        <p className={styles.caption}>DISCOVER</p>
        <p className={styles.caption}>THE BEST ARTS NFTS</p>
        <div className={styles.secondCaptionContainer}>
          <p className={styles.secondCaption}>A Unique And Innovative <span className={styles.captionSpan}>Collection</span> To Discover <span className={styles.captionSpan}>NFT</span></p>
          <p className={styles.secondCaption}><span className={styles.captionSpan}>Art</span> Starts Now And Discover NFTs</p>
        </div>
        <a className={styles.discoverBtn}>MINT NOW</a>
      </div>
      <div className={styles.headerImages}>
        <div className={styles.wrapper}>
          <span></span>
          <span></span>
          <div className={styles.videoBox}>
            <video src='/videos/video-3.mp4' autoPlay loop muted />
          </div>
        </div>
        <div className={styles.wrapper}>
          <span></span>
          <span></span>
          <div className={styles.videoBox}>
            <video src='/videos/video-3.mp4' autoPlay loop muted />
          </div>
        </div>
        <div className={styles.wrapper}>
          <span></span>
          <span></span>
          <div className={styles.videoBox}>
            <video src='/videos/video-3.mp4' autoPlay loop muted />
          </div>
        </div>
      </div>
    </div>
  )
}
