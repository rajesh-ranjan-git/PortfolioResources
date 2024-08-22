import './greetings.scss';
import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import GreetingsImg from './GreetingsImg/GreetingsImg';
import MyParticles from '../Particles/Particles';
import TypeText from '../TypeText/TypeText';
import { ButtonMask1 } from '../button/Button';
// import lottie from "lottie-web/build/player/lottie_light";
// import reactLogo from "../../assets/gifs/99312-developer-skills.json";
// import reactLogo2 from '../../assets/gifs/88930-coding.json';
import { getAnalytics, logEvent } from "firebase/analytics";
import { Helmet } from 'react-helmet';

export default function Greetings() {
  const analytics = getAnalytics();
  const openInNewTab = url => {
    logEvent(analytics, 'Resume downloaded');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Helmet>
        <title>Pranav Choudhary | Software Developer Portfolio</title>
        <meta name="description" content="Welcome to Pranav Choudhary's software developer portfolio. Explore my projects, skills, and get in touch." />
      </Helmet>

      <div className="jumbotron d-flex align-items-center" id="greetings">
        <div className="rectangle rectangle_1"></div>
        <div className="rectangle rectangle_2"></div>
        <div className="rectangle_transparent rectangle_transparent_1"></div>
        <div className="rectangle_transparent rectangle_transparent_2"></div>
        <div className="circle circle_1"></div>
        <div className="circle circle_2"></div>
        <div className="circle circle_3"></div>
        <div className="triangle triangle_1">
          <img src="obj_triangle.png" alt="" />
        </div>
        <div className="triangle triangle_2">
          <img src="obj_triangle.png" alt="" />
        </div>
        <div className="triangle triangle_3">
          <img src="obj_triangle.png" alt="" />
        </div>
        <div className="triangle triangle_4">
          <img src="obj_triangle.png" alt="" />
        </div>


        <MyParticles />
        <div className='fade_reveal'>
          <div className="home_content">
            <div className="row">
              <div className="col-md-7 home_header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{' '}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading_name">
                  I'M
                  <strong className="main_name"> Pranav Choudhary</strong>
                </h1>

                <div style={{ padding: '20px 0 30px', textAlign: 'left' }}>
                  <TypeText />
                </div>
                <SocialMedia />

                <ButtonMask1 onClick={() => openInNewTab('http://pranavelric.dev/resume/pranav_choudhary.pdf')} className='download_resume_btn'>Download Resume</ButtonMask1>


              </div>



              <div className='col-md-5' id='react-logo' style={{ paddingBottom: 20 }}>
                <GreetingsImg className="img_fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
