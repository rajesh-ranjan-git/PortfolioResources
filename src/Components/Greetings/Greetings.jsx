import "./greetings.scss";
import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import GreetingsImg from "./GreetingsImg/GreetingsImg";
import MyParticles from "../Particles/Particles";
import TypeText from "../TypeText/TypeText";
import { ButtonMask1, ButtonMask2 } from "../button/Button";
// import lottie from "lottie-web/build/player/lottie_light";
// import reactLogo from "../../assets/gifs/99312-developer-skills.json";
// import reactLogo2 from '../../assets/gifs/88930-coding.json';
// import { getAnalytics, logEvent } from "firebase/analytics";
import { Helmet } from "react-helmet";

export default function Greetings() {
  // const analytics = getAnalytics();
  const openInNewTab = (url) => {
    // logEvent(analytics, 'Resume downloaded');
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Helmet>
        <title>Rajesh Ranjan | Portfolio</title>
        <meta
          name="description"
          content="Welcome to Rajesh Ranjan's software developer portfolio. Explore my projects, skills, and get in touch."
        />
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
          <img src="src\assets\bg\obj_triangle.png" alt="" />
        </div>
        <div className="triangle triangle_2">
          <img src="src\assets\bg\obj_triangle.png" alt="" />
        </div>
        <div className="triangle triangle_3">
          <img src="src\assets\bg\obj_triangle.png" alt="" />
        </div>
        <div className="triangle triangle_4">
          <img src="src\assets\bg\obj_triangle.png" alt="" />
        </div>

        <MyParticles />
        <div className="fade_reveal">
          <div className="home_content">
            <div className="row">
              <div className="col-md-7 home_header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading_name">
                  I'm
                  <strong className="main_name">
                    {" "}
                    &nbsp;&nbsp;Rajesh Ranjan
                  </strong>
                </h1>

                <div style={{ padding: "20px 0 30px", textAlign: "left" }}>
                  <TypeText />
                </div>
                <SocialMedia />

                <ButtonMask1 className="contact_me_btn">CONTACT ME</ButtonMask1>

                <ButtonMask1
                  onClick={
                    () =>
                      openInNewTab(
                        "https://github.com/rajesh-ranjan-git/rajesh-ranjan-git/blob/main/Rajesh_Resume.pdf"
                      )
                    // openInNewTab("src/assets/Resume/Rajesh_Resume.pdf")
                  }
                  className="download_resume_btn"
                  // download
                >
                  SEE MY RESUME
                </ButtonMask1>
              </div>

              <div
                className="col-md-5"
                id="react-logo"
                style={{ paddingBottom: 20 }}
              >
                <GreetingsImg className="img_fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
