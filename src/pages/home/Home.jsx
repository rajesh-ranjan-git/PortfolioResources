import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BackToTop from "../../components/BackToTop/BackToTop";
import Greetings from "../../components/Greetings/Greetings";
import Menu from "../../components/menu/Menu";
import About from "../../containers/About/About";
import Achievements from "../../containers/achievements/Achievements";
import Certificates from "../../containers/Certificates/Certificates";
import Contact from "../../containers/Contact/Contact";
import Education from "../../containers/Education/Education";
import Experience from "../../containers/Experience/Experience";
import Portfolio from "../../containers/portfolio/Portfolio";
import Splash from "../splash/Splash";
// import { getAnalytics, logEvent } from "firebase/analytics";
// import MyParticles from '../../components/Particles/Particles';

export default function Home() {
  const [splash, setSplash] = useState(true);

  // It will be executed before rendering
  // const analytics = getAnalytics();

  useEffect(() => {
    // logEvent(analytics, 'Home page visited');
    setTimeout(() => setSplash(false), 2000);
  }, []);

  return splash ? (
    <Splash />
  ) : (
    <>
      <Menu />
      <div className="home">
        <Greetings />
        <About />
        <Experience />
        <Education />
        {/* <Achievements /> */}
        {/* <Portfolio /> */}
        {/* <Certificates /> */}
        <Contact />

        <BackToTop />
      </div>
    </>
  );
}
