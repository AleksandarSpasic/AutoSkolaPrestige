import React, { useState } from "react";
import "./NavbarStyle.css";
import Logo from "../../images/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaPhone,
  FaBars,
  FaTimes
} from "react-icons/fa";
import animateScrollTo from "animated-scroll-to";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const scrollToHome = () => {
    let item = document.querySelector(".carousel_wrapper");
    animateScrollTo(item);
    closeMenu();
  };
  const scrollToTerms = () => {
    let item = document.querySelector(".terms_section");
    animateScrollTo(item);
    closeMenu();
  };
  const scrollToAbout = () => {
    let item = document.querySelector(".aboutUS_wrapper");
    animateScrollTo(item);
    closeMenu();
  };
  const scrollToGallery = () => {
    let item = document.querySelector(".gallery_section");
    animateScrollTo(item);
    closeMenu();
  };
  const scrollToContact = () => {
    let item = document.querySelector(".contactUS");
    animateScrollTo(item);
    closeMenu();
  };

  const openMenu = () => {
    setActive(true);
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <div className="navbar_wrapper">
      <div className={active ? "navbar_top active_navbar_top" : "navbar_top"}>
        <div className="container">
          <div className="navbar_holder">
            <FaTimes onClick={closeMenu} className="closeMenu" />
            <div className="navbar_holder_left">
              <a onClick={scrollToHome}>Početna</a>
              <a onClick={scrollToTerms}>Termini</a>
              <a onClick={scrollToAbout}>O nama</a>
              <a onClick={scrollToGallery}>Galerija</a>
              <a onClick={scrollToContact}>Kontakt</a>
            </div>
            <div className="navbar_holder_right">
              <a
                target="_blank"
                href="https://www.facebook.com/Prestigeautoskola"
              >
                <FaFacebookF />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/prestigecarsofficial"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar_bottom">
        <div className="container">
          <div className="navbar_bottom_holder">
            <div className="navbar_bottom_bars_row">
              <a className="logo_holder">
                <img src={Logo} alt="logo" className="logo" />
              </a>
              <FaBars onClick={openMenu} />
            </div>
            <div className="navbar_bottom_items">
              <address className="navbar_bottom_item">
                <span>
                  <FaMapMarkerAlt />
                </span>
                Studenička 1, Niš
              </address>
              <a
                href="mailto:autoskolathebestplus@gmail.com"
                className="navbar_bottom_item"
              >
                <span>
                  <FaRegEnvelope />
                </span>
                autoskolathebestplus@gmail.com
              </a>
              <a href="tel:0605539959" className="navbar_bottom_item">
                <span>
                  <FaPhone />
                </span>
                +381 60 5539959
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
