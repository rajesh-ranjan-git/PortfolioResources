import React from 'react';
import {faGithubAlt,faStackOverflow,faLinkedinIn,faInstagram, faGoogle} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './socialMediaIcons.scss';

export default function SocialMediaIcons() {
  return (
    <>
    <a
    href="https://github.com/pranavelric"
    className={`icon_button github`}
    target="_blank"
    rel="noopener noreferrer"
  >
     <FontAwesomeIcon icon={faGithubAlt}  />
  </a>

  <a
    href="mailto:pranavchoudhary500@gmail.com"
    className={`icon_button google`}
    target="_blank"
    rel="noopener noreferrer"
  >
     <FontAwesomeIcon icon={faGoogle}  />
  </a>


    <a
    href="https://stackoverflow.com/users/10224590/pranav-choudhary"
    className={`icon_button stackoverflow`}
    target="_blank"
    rel="noopener noreferrer"
  >
     <FontAwesomeIcon icon={faStackOverflow}  />
  </a>
  <a
    href="https://www.linkedin.com/in/pranav-choudhary/"
    className={`icon_button linkedin`}
    target="_blank"
    rel="noopener noreferrer"
  >
     <FontAwesomeIcon icon={faLinkedinIn}  />
  </a>
  <a
    href="https://www.instagram.com/pranav.elric/"
    className={`icon_button instagram`}
    target="_blank"
    rel="noopener noreferrer"
  >
     <FontAwesomeIcon icon={faInstagram}  />
  </a>
  

  </>
  )
}
