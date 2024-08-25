import "./About.scss";
import React from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fade } from "react-awesome-reveal";
import Skills from "../skills/Skills";
import HomeContent from "../HomeContent/HomeContent";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
      {/* <Helmet>
        <title>About Rajesh Ranjan | Software Developer</title>
        <meta name="description" content="Learn about software developer Rajesh Ranjan's background, skills, and passion for creating digital experiences." />
      </Helmet> */}

      <HomeContent id="about" class="about">
        {/* <div id="about" className="about">
        
  
  <div className="container"> */}
        <Fade
          direction="bottom"
          className="about_detail"
          duration={2000}
          triggerOnce
        >
          <div>
            <div>
              <h2 className="section-title">About</h2>
            </div>

            <p>
              An enthusiastic Full Stack Web Developer adept at leveraging a
              diverse skill set. Certified with MERN Full Stack Development and
              React JS Development by GeeksForGeeks. Proficient in ReactJS,
              JavaScript, Node.js, MongoDB, ExpressJS, Python, and Java with an
              inclination towards delivering dynamic and user-friendly web
              applications. Passionate about staying updated with the latest
              technologies and trends in the industry, eager to transition into
              a dynamic startup environment where innovation thrives. Ready to
              bring my expertise in web development to contribute to the success
              and growth of forward-thinking companies. Let's connect and
              explore opportunities together!
              <br />
              <br />I enjoy creating things that live on the internet, whether
              that be websites, applications, games, or anything in between. I
              enjoy the process of turning ideas into reality using creative
              solutions. I’m always curious about learning new skills, tools,
              and concepts. My goal is to always build products that provide
              pixel-perfect, performance-optimized experiences. I'm learning new
              technologies day by day, and make projects on them to showcase my
              abilities.
            </p>
          </div>
        </Fade>
        <div className="row">
          <Fade
            className="col-lg-4 about_img"
            direction="left"
            duration={2000}
            delay={20}
            // triggerOnce
          >
            <img
              id="self_img"
              src="/favicon/title_pic_circular.png"
              className="img-fluid"
              alt="Rajesh Ranjan"
            />
          </Fade>
          <Fade
            direction="right"
            className="about_content"
            duration={2000}
            delay={20}
            // triggerOnce
          >
            <div style={{ paddingLeft: 50 }}>
              <h3>Full Stack Web Developer | React JS Developer</h3>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} />{" "}
                      <strong>Birthday:</strong> 18<sup>th</sup> January, 1997
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} />{" "}
                      <strong>Phone:</strong> +91-9999-340-771
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} />{" "}
                      <strong>Degree:</strong> B.Tech (Computer Science &
                      Engineering)
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} />{" "}
                      <strong>Email:</strong> rajeshranjan8271@gmail.com
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  {/* <ul>
                  <li><FontAwesomeIcon icon={faAngleRight}  /> <strong>Degree:</strong> B.Tech</li>
                  <li><FontAwesomeIcon icon={faAngleRight}  /> <strong>Email:</strong> rajeshranjan8271@gmail.com</li>
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
  );
}
