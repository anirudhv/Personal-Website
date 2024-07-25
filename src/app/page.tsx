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
                <strong>Hello! I am Anirudh Venkataramanan.</strong> I am currently an Artificial Intelligence and Data Engineer at <a href="https://www.ibm.com/">IBM</a>. <br /> 
                I graduated from the <a href="https://www.ucsc.edu/">University of California - Santa Cruz</a> with a Masters degree in <a href="https://engineering.ucsc.edu/departments/computational-media/">Computational Media</a> in December 2023.
                I previously earned my Bachelors degree in <a href="https://polytechnic.purdue.edu/departments/computer-graphics-technology">Computer and Graphics Technology</a> with minors in Computer Science and Information Technology from from <a href="https://purdue.edu/">Purdue University</a>.                
              </span>
              <div id={styles.innerContainer}>
                <Button size="large" color="success" href="mailto:anirudh.venky@gmail.com" target="_blank"><EmailIcon /></Button>
                <Button size="large" href="https://www.linkedin.com/in/anirudhvenkataramanan/" target="_blank"><LinkedInIcon /></Button>
                <Button size="large" color="success" href="https://github.com/anirudhv" target="_blank"><GitHubIcon /></Button>
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