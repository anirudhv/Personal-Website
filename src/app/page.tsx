"use client"
import Image from 'next/image';
import styles from './page.module.css';
import Navigation from './Components/Navigation/Navigation';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const Home = () => {
  return(
    <div>
      <Navigation />
      <div id={styles.home}>
            <img
              alt="Anirudh Venkataramanan"
              src="photo.jpg"
              id={styles.photo}
              />
              <div id={styles.container}>
              <span> 
                <strong>Hello! I am Anirudh Venkataramanan.</strong> I am a <a href="https://grad.soe.ucsc.edu/computational-media" target="_blank">Computational Media</a> Masters student at the <a href="https://ucsc.edu" target="_blank">University of California, Santa Cruz</a>. I will be graduating in September 2022 and am actively looking for full-time positions in the fields of interactive full-stack web development, mobile development, desktop application development, artificial intelligence, and graphics/video production.
              </span>
              <div id={styles.innerContainer}>
                <Button size="large" color="success" href="mailto:anirudh@ucsc.edu" target="_blank"><EmailIcon /></Button>
                <Button size="large" href="https://www.linkedin.com/in/anirudhvenkataramanan/" target="_blank"><LinkedInIcon /></Button>
                <Button size="large" color="success" href="https:/github.com/anirudhv" target="_blank"><GitHubIcon /></Button>
                <Button size="large" href="https://twitter.com/anirudhvenky/" target="_blank"><TwitterIcon /></Button>
              </div>
              <Button size="large" href="/Anirudh_Resume.pdf" target="_blank" color="error"><PictureAsPdfIcon /><span className={styles.black}>View my Resume</span></Button>
              <Button size="large" href="/Anirudh_Certificates.pdf" target="_blank" color="error"><PictureAsPdfIcon /><span className={styles.black}>View my Certificates</span></Button>            
            </div>
        </div>
      </div>
  );
}

export default Home;