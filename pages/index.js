import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faWarehouse, faRocket } from '@fortawesome/fontawesome-free-solid'
import { ReactComponent as WorkIcon } from './svg/work.svg';
import { ReactComponent as SchoolIcon } from './svg/school.svg';

import timelineElements from "./js_scripts/timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdEmail, MdLocalPhone, MdLocationCity } from 'react-icons/md';
import React, { useState } from "react";

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#F9C74F" };
  return (
    <div className={styles.mainContent}>
      <section className={`${styles.header} home`}>
        <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
            <Image src='/images/bored-ape.png' width={70} height={70} />
            <span className={styles.logoName}>escAPE</span>
          </div>
          <div>
            <Link to="home" smooth={true} className={styles.navlink}>
              Home
            </Link>
            <Link to='about' smooth={true} className={styles.navlink}>
              About
            </Link>
            <Link to="roadmap" smooth={true} className={styles.navlink}>
              Roadmap
            </Link>
            <Link to="contact" smooth={true} className={styles.navlink}>
              Contact
            </Link>
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
      </section>
      <section id={styles.aboutPage}>
        <div id="about" className={styles.aboutContainer}>
          <div className={styles.imgContainer}>
            <div className={styles.imgCard}>
              <video className={styles.aboutVideo} src='/videos/video-3.mp4' autoPlay loop muted></video>
              <p>Ape #80</p>
              <div className={styles.imgAuthor}>
                <img src='/images/dummy-image-1.jpeg' />
                <div className={styles.authorContainer}>
                  <p>Owned By</p>
                  <p>ZiggyZ4ga</p>
                </div>
              </div>
            </div>
            <div className={styles.imgCard}>
              <video className={styles.aboutVideo} src='/videos/video-3.mp4' autoPlay loop muted></video>
              <p>Ape #442</p>
              <div className={styles.imgAuthor}>
                <img src='/images/dummy-image-2.jpeg' />
                <div className={styles.authorContainer}>
                  <p>Owned By</p>
                  <p>D0ctOR1n</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutCaptionContainer}>
            <p className={styles.captionTitle}>ESCAPE NFT</p>
            <p className={styles.captionBlockchain}>Ethereum Blockchain</p>
            <p className={styles.captionSubtitle}>Get to Know More About Them</p>
            <p className={styles.captionDescription}>Escapes are a collection of 5,000 unique, programmatically generated NFTs with proof of ownership stored on the Ethereum blockchain. Each Escape is generated randomly from dozens of different assets.</p>
            <p className={styles.captionSubtitle}>Founder</p>
            <p className={styles.captionDescription}>Founder Escapes are numbered from #1 to #8000 and they carry special benefits for their owners. From time to time, Escapes will be raffled between Founders (those who own Founder Escapes). Each Founder Escape you have is a ticket for these raffles.</p>
            <p className={styles.captionSubtitle}>Rare Apes</p>
            <p className={styles.captionDescription}>There will be a total of 10 Rare Escapes generated throughout the project. All Rare Escapes are auctioned during a 7-day period to ensure everyone has a fair chance to own them.</p>
          </div>
        </div>
      </section>
      <section id={styles.roadmap}>
        <h1 id="roadmap" className={styles.roadmapTitle}>Roadmap</h1>
        <VerticalTimeline>
          {
            timelineElements.map((element, i) => {
              let isWorkIcon = element.icon === "work";
              let showButton = element.buttonText !== undefined && element.buttonText != null && element.buttonText != "";
              return (
                <VerticalTimelineElement 
                  key={element.id}
                  // date={element.date}
                  // dateClassName="date"
                  iconStyle={workIconStyles}
                  icon={<FontAwesomeIcon icon={faRocket}/>}
                >
                  <h3 className={`vertical-timeline-element-title ${styles.heading3}`}>{element.title}</h3>
                  <p id={styles.description}>{element.description}</p>
                  {/* {showButton && (<a className={`button ${isWorkIcon ? styles.workButton : styles.schoolButton} ${styles.roadmapBtn}`} href='/'>{element.buttonText}</a>)} */}
                </VerticalTimelineElement>
              );
            })
          }
        </VerticalTimeline>
      </section>
      <section id="contact" className={styles.contact}>
        <div className={styles.contactContainer}>
          <p className={styles.contactTitle}>Get in Touch</p>
          <p className={styles.contactSubtitle}>CONTACT</p>
          <div className={styles.contactForm}>
            <div className={styles.contactInfoContainer}>
              <div className={styles.contactInfoBox}>
                <div className={styles.contactIcon}><MdLocalPhone /></div>
                <p>+62883120910</p>
              </div>
              <div className={styles.contactInfoBox}>
                <div className={styles.contactIcon}><MdEmail /></div>
                <p>stanlyskwok@gmail.com</p>
              </div>
              <div className={styles.contactInfoBox}>
                <div className={styles.contactIcon}><MdLocationCity /></div>
                <p>Surabaya, Indonesia</p>
              </div>
            </div>
            <div className={styles.verticalRule}>
              <hr width="1" size="250"></hr>
            </div>
            <div className={styles.contactInputFormContainer}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Your name</label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Your email</label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Your message</label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button className={styles.contactBtn} type="submit">Send</button>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>Copyright &copy; escAPE 2022</p>
      </footer>
    </div>
  )
}
