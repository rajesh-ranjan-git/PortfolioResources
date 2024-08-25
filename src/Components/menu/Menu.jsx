import "./menu.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserAstronaut,
  faCertificate,
  faBlog,
  faPalette,
  faIdCard,
  faBriefcase,
  faBookOpenReader,
  faTrophy,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

import { Link } from "react-scroll";

// import {
//   Link
// } from "react-router-dom";
export default function Menu(props) {
  // useEffect(()=>{
  //     console.log('here');
  //     var getSidebar = document.querySelector('nav');
  //     const getToggle = Array.from(document.getElementsByClassName('toggle'));
  //     getToggle.forEach(element=>{
  //         element.addEventListener('click',()=>{
  //             getSidebar.classList.toggle('active');
  //         });
  //     });
  // },[]);

  function toggleMenu(e) {
    // const navbar = document.getElementById('sidebar');
    // navbar.classList.toggle('active');

    const sideNav = document.querySelector("#side_nav");
    sideNav.classList.toggle("active");
    // if (sideNav.style.width == "5.6rem" || sideNav.style.width == "") {
    //     sideNav.style.width = "19rem";

    //   } else {
    //     // close side nav
    //     sideNav.style.width = "5.6rem";
    //     // close all opened sub menus
    //     document.querySelectorAll('.nav__drop').forEach(drop => drop.style.height = '0px');

    //   }
  }

  function scrollToTestDiv(id) {
    const divElement = document.getElementById(id);
    divElement.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  }
  const [active, setActive] = useState(null);

  return (
    <>
      {/* <nav id='sidebar'>
        <ul>
            <li>
                <a className="toggle" onClick={toggleMenu} href='#'>
                    <span className="icon" style={{display:'flex', alignItems:'center', justifyContent:'center'}} ><Hamburger size={20} easing="ease-in" rounded/></span>
                    
                    <span className="title">Menu</span>
                </a>
            </li>
            <li>
                <a href="#" target="_blank">
                    <span className="icon"><FontAwesomeIcon icon={faHouse} /></span>
                    <span className="title">Home</span>
                </a>
            </li>
            <li>
                <a href="#" target="_blank">
                    <span className="icon"><FontAwesomeIcon icon={faUserAstronaut} /></span>
                    <span className="title">Profile</span>
                </a>
            </li>
            <li>
                <a href="#" target="_blank">
                    <span className="icon"><FontAwesomeIcon icon={faMessage} /></span>
                    <span className="title">Messages</span>
                </a>
            </li>
            <li>
                <a href="#" target="_blank">
                    <span className="icon"><FontAwesomeIcon icon={faInfo} /></span>
                    <span className="title">Help</span>
                </a>
            </li>
            <li>
                <a href="#" target="_blank">
                    <span className="icon"><FontAwesomeIcon icon={faCog} /></span>
                    <span className="title">Setting</span>
                </a>
            </li>
            <li>
                <a href="#" target="_blank">
                    <span className="icon"><FontAwesomeIcon icon={faLock} /></span>
                    <span className="title">Password</span>
                </a>
            </li>
            <li>
                <a href="#" target="_blank">
                    <span className="icon"><FontAwesomeIcon icon={faSignOutAlt} /></span>
                    <span className="title">Sign Out</span>
                </a>
            </li>
        </ul>
    </nav> */}

      <button type="button" className="mobile-nav-toggle" onClick={toggleMenu}>
        {" "}
        <Hamburger size={20} easing="ease-in" rounded className="nav_icon" />
      </button>

      <div className="sidenav_container" id="side_nav">
        <nav className="nav">
          <div className="nav_brand">
            <div
              className="nav_icon nav_icon_menu"
              onClick={toggleMenu}
              id="nav-toggle"
            >
              <Hamburger
                size={20}
                easing="ease-in"
                rounded
                className="nav_icon"
              />
            </div>

            <a href="/" className="nav_brand_logo">
              Rajesh Ranjan
            </a>
          </div>

          <hr />

          <ul className="nav_list">
            {!props.detail ? (
              <>
                <li className="nav_item">
                  <Link
                    activeClass="active"
                    className="nav_link"
                    to="greetings"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <FontAwesomeIcon icon={faHouse} className="nav_icon" />
                    <span className="nav__name">Home</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav_item">
                  <a href="/" className="nav_link">
                    <FontAwesomeIcon icon={faHouse} className="nav_icon" />
                    <span className="nav_name">Home</span>
                  </a>
                </li>
              </>
            )}

            {!props.detail ? (
              <>
                <li className="nav_item">
                  <Link
                    activeClass="active"
                    className="nav_link"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <FontAwesomeIcon
                      icon={faUserAstronaut}
                      className="nav_icon"
                    />
                    <span className="nav_name">About</span>
                  </Link>
                </li>

                <li className="nav_item">
                  <Link
                    activeClass="active"
                    className="nav_link"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <FontAwesomeIcon icon={faBriefcase} className="nav_icon" />
                    <span className="nav_name">Experience</span>
                  </Link>
                </li>
                <li className="nav_item">
                  <Link
                    activeClass="active"
                    className="nav_link"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <FontAwesomeIcon
                      icon={faBookOpenReader}
                      className="nav_icon"
                    />
                    <span className="nav_name">Education</span>
                  </Link>
                </li>
                <li className="nav_item">
                  <Link
                    activeClass="active"
                    className="nav_link"
                    to="achievements"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <FontAwesomeIcon icon={faTrophy} className="nav_icon" />
                    <span className="nav_name">Achievements</span>
                  </Link>
                </li>

                <li className="nav_item">
                  <Link
                    activeClass="active"
                    className="nav_link"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <FontAwesomeIcon icon={faCubes} className="nav_icon" />
                    <span className="nav_name">Portfolio</span>
                  </Link>
                </li>

                <li className="nav_item">
                  <Link
                    activeClass="active"
                    className="nav_link"
                    to="certificates"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="nav_icon"
                    />
                    <span className="nav_name">Certificates</span>
                  </Link>
                </li>
                <li className="nav_item">
                  <a
                    href="https://persocom.herokuapp.com/"
                    target="_blank"
                    className="nav_link"
                  >
                    <FontAwesomeIcon icon={faBlog} className="nav_icon" />
                    <span className="nav_name">Blog</span>
                  </a>
                </li>
                <li className="nav_item">
                  <a href="#/artwork" target="_blank" className="nav_link">
                    <FontAwesomeIcon icon={faPalette} className="nav_icon" />
                    <span className="nav_name">Art</span>
                  </a>
                </li>
                <li className="nav_item">
                  <Link
                    activeClass="active"
                    className="nav_link"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    <FontAwesomeIcon icon={faIdCard} className="nav_icon" />
                    <span className="nav_name">Contact</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav_item">
                  <a className="nav_link" href="/">
                    <FontAwesomeIcon
                      icon={faUserAstronaut}
                      className="nav_icon"
                    />
                    <span className="nav_name">About</span>
                  </a>
                </li>

                <li className="nav_item">
                  <a className="nav_link" href="/">
                    <FontAwesomeIcon icon={faBriefcase} className="nav_icon" />
                    <span className="nav_name">Experience</span>
                  </a>
                </li>
                <li className="nav_item">
                  <a className="nav_link" href="/">
                    <FontAwesomeIcon
                      icon={faBookOpenReader}
                      className="nav_icon"
                    />
                    <span className="nav_name">Education</span>
                  </a>
                </li>
                <li className="nav_item">
                  <a className="nav_link" href="/">
                    <FontAwesomeIcon icon={faTrophy} className="nav_icon" />
                    <span className="nav_name">Achievements</span>
                  </a>
                </li>

                <li className="nav_item">
                  <a className="nav_link" href="/">
                    <FontAwesomeIcon icon={faCubes} className="nav_icon" />
                    <span className="nav_name">Portfolio</span>
                  </a>
                </li>

                <li className="nav_item">
                  <a className="nav_link" href="/">
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="nav_icon"
                    />
                    <span className="nav_name">Certificates</span>
                  </a>
                </li>
                <li className="nav_item">
                  <a
                    href="https://persocom.herokuapp.com/"
                    target="_blank"
                    className="nav_link"
                  >
                    <FontAwesomeIcon icon={faBlog} className="nav_icon" />
                    <span className="nav_name">Blog</span>
                  </a>
                </li>
                <li className="nav_item">
                  <a href="#/artwork" target="_blank" className="nav_link">
                    <FontAwesomeIcon icon={faPalette} className="nav_icon" />
                    <span className="nav_name">Art</span>
                  </a>
                </li>
                <li className="nav_item">
                  <a className="nav_link" href="/">
                    <FontAwesomeIcon icon={faIdCard} className="nav_icon" />
                    <span className="nav_name">Contact</span>
                  </a>
                </li>
              </>
            )}
          </ul>

          <hr />

          <div className="nav_user">
            <div className="nav_user_image">
              <img src={`/favicon/title_pic_circular.png`} alt="profile" />
            </div>

            <div className="nav_user_info">
              <div className="nav_user_info_name">Rajesh Ranjan</div>
              <div className="nav_user_info_email">
                <a href="mailto:pranavchoudhary500@gmail.com" target="_blank">
                  rajeshranjan8271@gmail.com
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
