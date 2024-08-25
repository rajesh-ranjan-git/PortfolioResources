import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detail.scss";
import { projectsHeader } from "../../portfolio";
import Menu from "../../components/menu/Menu";
// import { getAnalytics, logEvent } from "firebase/analytics";

import Slider from "react-slick";
import Splash from "../splash/Splash";

export default function Detail() {
  const { project } = useParams();
  const [item, setItem] = useState(null);
  const [splash, setSplash] = useState(true);
  const settings = {
    // customPaging: function(i) {
    //   return (
    //     <a>
    //       <img src={item.slides[i]} />
    //     </a>
    //   );
    // },
    dots: true,
    dotsClass: "slider-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  // const analytics = getAnalytics();

  useEffect(() => {
    // setItem(projectsHeader.projects[project])
    let detail = projectsHeader.projects.filter((el) => el.id == project);
    setItem(detail[0]);
    // logEvent(analytics, `${item?item.title : 'Project'} page visited`);
    setTimeout(() => setSplash(false), 2500);
  }, [project]);

  return splash ? (
    <Splash />
  ) : (
    <>
      <Menu detail={true} />
      <div className="home">
        <main id="main" className="details_main">
          <section className="breadcrumbs">
            <div className="detail_container">
              <div className="project_header">
                <h2>{item ? item.title : "Project"} Details</h2>
                <ol>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">Portfolio</a>
                  </li>
                  <li>{item ? item.title : "Project"} Details</li>
                </ol>
              </div>
            </div>
          </section>

          <section className="portfolio-details">
            <div className="detail_container">
              <div className="portfolio-details-container">
                <div className=" portfolio-details-carousel">
                  {item && item.slides ? (
                    <>
                      <Slider {...settings}>
                        {item.slides.map((img, i) => (
                          <img
                            src={img}
                            key={i}
                            className=" img-fluid"
                            alt=""
                          />
                        ))}
                      </Slider>
                    </>
                  ) : (
                    <img
                      src="assets/utils/404error.svg"
                      className=" error_img img-fluid"
                      alt=""
                    />
                  )}
                </div>

                <div className="portfolio-info">
                  {item ? (
                    <>
                      {" "}
                      <h3>Project information</h3>
                      <ul>
                        <li>
                          <strong>Category</strong>: {item.category}
                        </li>
                        <li className="tech_container">
                          <strong>Tech</strong>:{" "}
                          {item.tech.map((te, i) => (
                            <p key={i} className="tech_breadcrumb">
                              {` ${te}`}{" "}
                            </p>
                          ))}
                        </li>
                        <li>
                          <strong>Project date</strong>: {item.date}
                        </li>
                        {item.website_link ? (
                          <li>
                            <strong>Website URL</strong>:{" "}
                            <a
                              href={item.website_link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Check it here
                            </a>
                          </li>
                        ) : null}
                        {item.github_link ? (
                          <li>
                            <strong>Github URL</strong>:{" "}
                            <a
                              href={item.github_link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Check it here
                            </a>
                          </li>
                        ) : null}
                        {item.google_play_link ? (
                          <li>
                            <strong>Google Playstore URL</strong>:{" "}
                            <a
                              href={item.google_play_link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Check it here
                            </a>
                          </li>
                        ) : null}
                        {item.amazon_store ? (
                          <li>
                            <strong>Amazon App store URL</strong>:{" "}
                            <a
                              href={item.amazon_store}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Check it here
                            </a>
                          </li>
                        ) : null}
                      </ul>
                    </>
                  ) : (
                    <>
                      {" "}
                      <h3>Project information</h3>
                      <ul>
                        <li>
                          <strong>Project Not found</strong>
                        </li>
                      </ul>
                    </>
                  )}
                </div>
              </div>
              {item ? (
                <div className="portfolio-description">
                  <h2>{item.title}</h2>
                  {/* <h4>{item.subtitle}</h4> */}
                  <p>{item.summary}</p>

                  {item.attribution ? (
                    <p className="attribution">
                      <strong>Note!</strong> {item.attribution}
                    </p>
                  ) : null}
                  {item.features && (
                    <>
                      <h3 className="feature_title">Features</h3>
                      <div className="feature">
                        {item.features.map((feature, i) => (
                          <div className={"item item--" + i} key={i}>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* </ul> */}
                </div>
              ) : (
                <h1>Not found</h1>
              )}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
