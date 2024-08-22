import React from 'react';
import './Certificates.scss';
import { Fade } from 'react-awesome-reveal';
import HomeContent from '../HomeContent/HomeContent';
import { CertificateCard } from '../../components/ExpCard/Cards';
import { Helmet } from 'react-helmet';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { certificates } from '../../portfolio';

export default function Certificates() {

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    // swipeToSlide: true,
    // adaptiveHeight: true,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
    //  nextArrow:<></>,
    //   prevArrow: <></>,

  };

  return (
    <HomeContent id='certificates' class='certificates'>

      {/* <Helmet>
        <title>Certificates | Pranav Choudhary</title>
        <meta name="description" content="Explore Pranav Choudhary's earned certificates in various software development domains." />
      </Helmet> */}

      <h2 className="h3 section-title">Certificates</h2>

      <Fade direction='bottom' duration={2000} triggerOnce>



        <Slider {...settings}>
          {certificates.map((cert, i) => (
            <CertificateCard key={i} image={cert.src} title={cert.title} desc={cert.description} college={cert.college} provider={cert.provider} />
          ))
          }


        </Slider>




      </Fade>
    </HomeContent>
  )
}
