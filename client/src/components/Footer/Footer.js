import React from "react";
import "./FooterStyle.css";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaPhone,
  FaAngleRight
} from "react-icons/fa";
import animateScrollTo from "animated-scroll-to";

const Footer = () => {
  const scrollToHome = () => {
    let item = document.querySelector(".carousel_wrapper");
    animateScrollTo(item);
  };
  const scrollToTerms = () => {
    let item = document.querySelector(".terms_section");
    animateScrollTo(item);
  };
  const scrollToAbout = () => {
    let item = document.querySelector(".aboutUS_wrapper");
    animateScrollTo(item);
  };
  const scrollToGallery = () => {
    let item = document.querySelector(".gallery_section");
    animateScrollTo(item);
  };
  const scrollToContact = () => {
    let item = document.querySelector(".contactUS");
    animateScrollTo(item);
  };

  return (
    <div className="footer_wrapper">
      <div className="container">
        <div className="footer_holder">
          <div className="fast_links">
            <h2>Linkovi:</h2>
            <a onClick={scrollToHome}>
              <FaAngleRight /> <span>Početna</span>
            </a>
            <a onClick={scrollToAbout}>
              <FaAngleRight /> <span>Termini</span>
            </a>
            <a onClick={scrollToTerms}>
              <FaAngleRight /> <span>O nama</span>
            </a>
            <a onClick={scrollToGallery}>
              <FaAngleRight /> <span>Galerija</span>
            </a>
            <a onClick={scrollToContact}>
              <FaAngleRight /> <span>Kontakt</span>
            </a>
          </div>
          <div className="footer_folow_us">
            <h2>Zapratite nas:</h2>
            <a
              target="_blank"
              href="https://www.instagram.com/prestigecarsofficial"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/Prestigeautoskola"
            >
              <FaFacebookF />
              <span>Facebook</span>
            </a>
          </div>
          <div className="footer_info">
            <h2>Kontakt:</h2>
            <address className="footer_info_text">
              <span>
                <FaMapMarkerAlt />
              </span>
              Design Street, Australia
            </address>
            <a
              href="mailto:autoskolathebestplus@gmail.com"
              className="footer_info_text"
            >
              <span>
                <FaRegEnvelope />
              </span>
              autoskolathebestplus@gmail.com
            </a>
            <a href="tel:0605539959" className="footer_info_text">
              <span>
                <FaPhone />
              </span>
              +381 60 5539959
            </a>
          </div>
          <div className="opening_hours">
            <h2>Radno vreme:</h2>
            <p>
              <b>Ponedeljak</b> <span>..........</span> 10:30AM–3:30PM
            </p>
            <p>
              <b>Utorak</b> <span>..........</span> 10:30AM–3:30PM
            </p>
            <p>
              <b>Sreda</b> <span>..........</span> 10:30AM–3:30PM
            </p>
            <p>
              <b>Četvrtak</b> <span>..........</span> 10:30AM–3:30PM
            </p>
            <p>
              <b>Petak</b> <span>..........</span> 10:30AM–3:30PM
            </p>
            <p>
              <b>Subota</b> <span>..........</span> Zatvoreno
            </p>
            <p>
              <b>Nedelja</b> <span>..........</span> Zatvoreno
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
