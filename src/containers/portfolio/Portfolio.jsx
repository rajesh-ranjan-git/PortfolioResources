import React from "react";
import "./Portfolio.scss";
import HomeContent from "../HomeContent/HomeContent";
import PortfolioContent from "./Portfoliocontent/PortfolioContent";
import { projectsHeader } from "../../portfolio";
import { useState } from "react";

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
import { Helmet } from "react-helmet";

import { advancedSlides } from "./Lightbox/data/slides";
import OtherProjects from "./OtherProjects/OtherProjects";
// import { getAnalytics, logEvent } from "firebase/analytics";

export default function Portfolio() {
  // const analytics = getAnalytics();
  const [photoState, setPhotoState] = useState({
    photoIndex: 0,
    isOpen: false,
  });

  const openLightBox = (index) => {
    setPhotoState({ photoIndex: index, isOpen: true });
    // logEvent(analytics, 'Portfolio lightbox opened');
  };

  const [items, setItems] = useState(projectsHeader.projects);
  const [mySlides, setMySlides] = useState(advancedSlides);
  const [active, setActive] = useState(null);
  const filterItem = (categItem) => {
    // logEvent(analytics, `Portfolio items filetred by ${categItem}`);
    const updateItems = projectsHeader.projects.filter((curElem) => {
      return curElem.filter === categItem;
    });
    const myAdvancedSlides = advancedSlides.filter((slide) => {
      return slide.filter === categItem;
    });

    setItems(updateItems);
    setActive(categItem);
    setMySlides(myAdvancedSlides);
  };

  return (
    <HomeContent id="portfolio" class="portfolio">
      {/* <Helmet>
        <title>Portfolio | Pranav Choudhary</title>
        <meta name="description" content="Explore Pranav Choudhary's software development portfolio showcasing applications, web projects, games, and other noteworthy projects. " />
      </Helmet> */}

      <h2 className="h3 section-title">Portfolio</h2>

      {photoState.isOpen && (
        <Lightbox
          open={photoState.isOpen}
          close={() => setPhotoState({ photoIndex: 0, isOpen: false })}
          slides={mySlides}
          plugins={[Captions, Fullscreen, Thumbnails, Zoom]}
          index={photoState.photoIndex}
          render={(mySlides, 1, null)}
        />
      )}

      <div className="portfolio_section">
        <div className="portfolio_container">
          <div className="portfolio_item_btns col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filters">
              <li
                data-filter="*"
                onClick={() => {
                  setItems(projectsHeader.projects);
                  setActive(null);
                  setMySlides(advancedSlides);
                }}
                className={active === null ? "filter-active" : null}
              >
                All
              </li>
              <li
                data-filter=".filter-app"
                onClick={() => filterItem("filter-app")}
                className={active === "filter-app" ? "filter-active" : null}
              >
                App
              </li>
              <li
                data-filter=".filter-game"
                onClick={() => filterItem("filter-game")}
                className={active === "filter-game" ? "filter-active" : null}
              >
                Games
              </li>
              <li
                data-filter=".filter-web"
                onClick={() => filterItem("filter-web")}
                className={active === "filter-web" ? "filter-active" : null}
              >
                Web
              </li>
            </ul>
          </div>

          <div className="portfolio_grid_row">
            {items.map((project, key) => (
              <PortfolioContent
                onClick={openLightBox}
                index={key}
                key={key}
                subtitle={project.subtitle}
                title={project.title}
                by={project.by}
                image={project.image}
                id={project.id}
              />
            ))}
          </div>

          {/* <OtherProjects /> */}
        </div>
      </div>
    </HomeContent>
  );
}
