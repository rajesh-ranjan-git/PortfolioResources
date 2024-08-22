import './About.scss';
import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fade } from "react-awesome-reveal";
import Skills from '../skills/Skills';
import HomeContent from '../HomeContent/HomeContent';
import { Helmet } from 'react-helmet';



export default function About() {

  return (
    <>

      {/* <Helmet>
        <title>About Pranav Choudhary | Software Developer</title>
        <meta name="description" content="Learn about software developer Pranav Choudhary's background, skills, and passion for creating digital experiences." />
      </Helmet> */}

      <HomeContent id='about' class='about'>
        {/* <div id="about" className="about">
        
  
  <div className="container"> */}
        <Fade direction='bottom' className='about_detail' duration={2000} triggerOnce>
          <div >

            <div>
              <h2 className='section-title'>About </h2>
            </div>


            <p>

              Highly skilled and experienced software engineer with an excellent background in software engineering specializing in building exceptional mobile applications, websites, and everything in between. Well versed with backend technologies, multiple databases and mobile app development.

              <br />
              <br />

              I enjoy creating things that live on the internet, whether that be websites, applications, games, or
              anything in between. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills, tools, and concepts. My goal is to always build products that provide pixel-perfect, performance-optimized experiences.

              I'm learning new technologies day by day, and make projects on them to showcase my abilities.
            </p>
          </div>
        </Fade >
        <div className="row">
          <Fade className='col-lg-4' direction='left' duration={2000} delay={20} triggerOnce>

            <img id="self_img" src='./me.png' className="img-fluid" alt="Pranav Choudhary" />

          </Fade>
          <Fade direction='right' className='about_content' duration={2000} delay={20} triggerOnce>
            <div>
              <h3>Software Developer</h3>
              <div className="row">
                <div className="col-lg-6">
                  {/* <ul>
                  <li><FontAwesomeIcon icon={faAngleRight}  /> <strong>Birthday:</strong> 15 Aug 1999</li>
                  <li><FontAwesomeIcon icon={faAngleRight}  /> <strong>Phone:</strong> +91 9636444004</li>
                </ul> */}
                  <ul>
                    <li><FontAwesomeIcon icon={faAngleRight} /> <strong>Degree:</strong> B.Tech</li>
                    <li><FontAwesomeIcon icon={faAngleRight} /> <strong>Email:</strong> pranavchoudhary500@gmail.com</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  {/* <ul>
                  <li><FontAwesomeIcon icon={faAngleRight}  /> <strong>Degree:</strong> B.Tech</li>
                  <li><FontAwesomeIcon icon={faAngleRight}  /> <strong>Email:</strong> pranavchoudhary500@gmail.com</li>
                </ul> */}
                </div>
              </div>
              <p>
                <br />
              </p>
            </div>
          </Fade>
        </div>

        <Skills />
        {/* </div>
    </div> */}

      </HomeContent>
    </>
  )
}
