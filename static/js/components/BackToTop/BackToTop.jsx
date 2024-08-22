import React, { useEffect, useState } from 'react';
import './BackToTop.scss';
import { ButtonMask2 } from '../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function BackToTop() {
    const [visible, setVisible] = useState(false)
  

  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
        // console.log(window.screenY);
        if (window.scrollY > 4500) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });
}, []);

  return (
   
    <ButtonMask2 onClick={()=>scrollToTop()}    className={visible?'back_to_top':'none'} >

<FontAwesomeIcon icon={faArrowUp} className="nav_icon" />

    </ButtonMask2>
     
  )
}
