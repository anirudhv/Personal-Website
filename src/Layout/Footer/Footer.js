import React from 'react';
import modules from './Footer.module.css';

const Footer = (props) => (
	<div className={modules.Footer}>
	<a href="https://twitter.com/anirudhvenky" class={modules.SocialMedia}><i class="fa fa-twitter"></i></a>
    <a href="mailto:anirudhv@purdue.edu" class={modules.SocialMedia}><i class="fa fa-envelope"></i></a>
  	<a href="https://www.linkedin.com/in/anirudh-venkataramanan-2811651a5/" class={modules.SocialMedia}><i class="fa fa-github"></i></a>
  	<a href="https://github.com/anirudhv" class={modules.SocialMedia}><i class="fa fa-linkedin"></i></a>
	</div>
);

export default Footer;