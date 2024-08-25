import "./Education.scss";
import React from "react";
import HomeContent from "../HomeContent/HomeContent";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { EduCard } from "../../components/ExpCard/Cards";

export default function Education() {
  return (
    <HomeContent id="education" class="experience">
      {/* <Helmet>
        <title>Education | Pranav Choudhary</title>
        <meta name="description" content="Learn about Rajesh Ranjan's educational background, including a B.Tech in Computer Science and Engineering from JP Institute of Engineering and Technology, Meerut and Senior Secondary studies from Indian School of Learning, Dhanbad." />
      </Helmet> */}
      <h2 className="h3 section-title">Education</h2>
      <Fade direction="bottom" duration={2000} triggerOnce>
        <div className="education_card">
          <EduCard
            img_path="src\assets\bg\edu4.svg"
            title="B.TECH in COMPUTER SCIENCE & ENGINEERING"
            period="2014 - 2018"
            college="JP Institute of Engineering and Technology, Meerut, UP, India"
            gpa="Percentage: 72.8%"
          />
          <EduCard
            img_path="src\assets\bg\edu3.svg"
            title="SENIOR SECONDARY (XII), SCIENCE"
            period="2013 - 2014"
            college="Indian School of Learning, Dhanbad, Jharkhand, India"
            gpa="Percentage: 78%"
          />
        </div>
      </Fade>
    </HomeContent>
  );
}
