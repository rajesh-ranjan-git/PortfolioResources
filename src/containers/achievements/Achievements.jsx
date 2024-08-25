import React, { useState } from "react";
import "./Achievements.scss";
import HomeContent from "../HomeContent/HomeContent";
import { Fade } from "react-awesome-reveal";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
// import { getAnalytics, logEvent } from "firebase/analytics";
import { Helmet } from "react-helmet";

import { achievements } from "../../portfolio";

export default function Achievements() {
  // const analytics = getAnalytics();

  const [photoState, setPhotoState] = useState({
    photoIndex: 0,
    isOpen: false,
  });

  const openLightBox = (index) => {
    setPhotoState({ photoIndex: index, isOpen: true });
    // logEvent(analytics, 'Achievement lightbox opened');
  };

  return (
    <HomeContent id="achievements" className="experience">
      {/* <Helmet>
        <title>Achievements | Rajesh Ranjan</title>
        <meta name="description" content="Explore Rajesh Ranjan's achievements, including awards in Flipr Hackathons, a Goldman Sachs virtual internship, and recognition on Stack Overflow." />
      </Helmet> */}

      <h2 className="h3 section-title">Achievements</h2>

      {photoState.isOpen && (
        <Lightbox
          open={photoState.isOpen}
          close={() => setPhotoState({ photoIndex: 0, isOpen: false })}
          slides={achievements}
          plugins={[Captions, Fullscreen, Thumbnails, Zoom]}
          index={photoState.photoIndex}
          render={(achievements, 1, null)}
        />
      )}

      <Fade direction="bottom" duration={2000} triggerOnce>
        <div className="hex-grid__wrap">
          <ul className="hex-grid__list">
            <li className="hex-grid__item hex-grid__item--light hex-grid__item--fake"></li>
            <li className="hex-grid__item hex-grid__item--blank"></li>
            <li className="hex-grid__item hex-grid__item--light">
              <div
                className="hex-grid__content"
                onClick={() => openLightBox(0)}
              >
                <img
                  src="./assets/achievements/flipr.jpeg"
                  alt="Flipr Hackathon X 1st Place Award for Mobile App Development"
                ></img>
                <div className="overlay">
                  <div className="overlay_title">FLIPR HACKATHON X</div>
                  <div className="overlay_issuer">
                    <div className="overlay_date">Sept 2021</div>
                    <div className="overlay_company">Flipr Innovation Labs</div>
                  </div>
                  <div className="overlay_text">
                    Ranked 1st in Flipr Hackathon X Mobile App Development
                  </div>
                </div>
              </div>
              {/* <img className="hex-grid__content" src='./assets/bg/edu3.svg'></img> */}
            </li>
            <li className="hex-grid__item hex-grid__item--blank"></li>
            <li className="hex-grid__item hex-grid__item--light hex-grid__item--fake"></li>
            <li className="hex-grid__item">
              <div
                className="hex-grid__content"
                onClick={() => openLightBox(1)}
              >
                <img
                  src="./assets/achievements/goldman.svg"
                  alt="OLDMAN SACHS ENGINEERING VIRTUAL INTERNSHIP"
                ></img>
                <div className="overlay">
                  <div className="overlay_title">
                    GOLDMAN SACHS ENGINEERING VIRTUAL INTERNSHIP
                  </div>
                  <div className="overlay_issuer">
                    <div className="overlay_date">Jan 2021</div>
                    <div className="overlay_company">GOLDMAN SACHS</div>
                  </div>
                  <div className="overlay_text">
                    Successfully completed the given task to crack leaked
                    password database
                  </div>
                </div>
              </div>
            </li>
            <li className="hex-grid__item">
              <div
                className="hex-grid__content"
                onClick={() => openLightBox(2)}
              >
                <img
                  src="./assets/achievements/flipr.jpeg"
                  alt="Flipr Hackathon 8 2nd Place Award for Mobile App Development"
                  className="invert"
                ></img>
                <div className="overlay">
                  <div className="overlay_title">FLIPR HACKATHON 8.0</div>
                  <div className="overlay_issuer">
                    <div className="overlay_date">May 2021</div>
                    <div className="overlay_company">Flipr Innovation Labs</div>
                  </div>
                  <div className="overlay_text">
                    Ranked 2nd in Flipr Hackathon 8.0 Mobile App Development
                  </div>
                </div>
              </div>
            </li>
            <li className="hex-grid__item">
              <div
                className="hex-grid__content"
                onClick={() => openLightBox(3)}
              >
                <img
                  src="./assets/achievements/google_cloud.svg"
                  alt="Successfully completed Qwiklab tasks in Cloud Engineering Track and Data Science & Machine learning Track"
                ></img>
                <div className="overlay">
                  <div className="overlay_title">
                    30 DAYS OF GOOGLE CLOUD PROGRAM
                  </div>
                  <div className="overlay_issuer">
                    <div className="overlay_date">Nov 2020</div>
                    <div className="overlay_company">Google</div>
                  </div>
                  <div className="overlay_text">
                    Successfully completed Qwiklab tasks in Cloud Engineering
                    Track and Data Science & Machine learning Track
                  </div>
                </div>
              </div>
            </li>
            <li className="hex-grid__item">
              <div
                className="hex-grid__content"
                onClick={() => openLightBox(4)}
              >
                <img
                  src="./assets/achievements/hacktoberfest-2021-badge.png"
                  alt="Successfully completed the one month long open source program"
                ></img>
                <div className="overlay">
                  <div className="overlay_title">HACKTOBERFEST 2021</div>
                  <div className="overlay_issuer">
                    <div className="overlay_date">Oct 2021</div>
                    <div className="overlay_company">Digital Ocean</div>
                  </div>
                  <div className="overlay_text">
                    Successfully completed the one month long open source
                    program
                  </div>
                </div>
              </div>
            </li>
            <li className="hex-grid__item">
              <div
                className="hex-grid__content"
                onClick={() => openLightBox(5)}
              >
                <img
                  src="./assets/achievements/hacktoberfest2020-badge.png"
                  alt="Successfully completed the one month long open source program"
                ></img>
                <div className="overlay">
                  <div className="overlay_title">HACKTOBERFEST 2020</div>
                  <div className="overlay_issuer">
                    <div className="overlay_date">Oct 2020</div>
                    <div className="overlay_company">Digital Ocean</div>
                  </div>
                  <div className="overlay_text">
                    Successfully completed the one month long open source
                    program
                  </div>
                </div>
              </div>
            </li>
            <li className="hex-grid__item hex-grid__item--light hex-grid__item--fake"></li>

            <li className="hex-grid__item hex-grid__item--light">
              <div className="hex-grid__content">
                <a
                  target="_blank"
                  href="https://stackoverflow.com/users/10224590/pranav-choudhary?tab=profile"
                  rel="noreferrer"
                >
                  <img
                    src="./assets/achievements/Stack_Overflow_icon.svg"
                    alt="Scored 2.6k  reputation on Stackoverflow and belong to top 13% among all registered user on Stackoverflow"
                  ></img>
                  <div className="overlay">
                    <div className="overlay_title">
                      Belong to top 13% users this year in Stackoverflow
                    </div>
                    <div className="overlay_issuer">
                      {/* <div className="overlay_date">Sept 2021</div> */}
                      <div className="overlay_company">StackOverflow</div>
                    </div>
                    <div className="overlay_text">
                      Scored 2.6k reputation on Stackoverflow and belong to top
                      13% among all registered user on Stackoverflow
                    </div>
                  </div>
                </a>
              </div>
            </li>
            <li className="hex-grid__item hex-grid__item--blank"></li>
            <li className="hex-grid__item hex-grid__item--light hex-grid__item--fake">
              <div className="hex-grid__content">
                {/* <img src='./assets/bg/edu3.svg'></img> */}
                {/* <div className="overlay">
    <div className="overlay_title">FLIPR HACKATHON X</div>
    <div className="overlay_issuer">
    <div className="overlay_date">Sept 2021</div>
    <div className="overlay_company">Flipr Innovation Labs</div>
    </div>
    <div className="overlay_text">Ranked 1st in Flipr Hackathon X Mobile App Development</div>
    
  </div> */}
              </div>
            </li>
          </ul>
        </div>
      </Fade>
    </HomeContent>
  );
}
