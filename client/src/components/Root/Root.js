import React from "react";

// Components
import Navbar from "../Navbar/Navbar";
import Terms from "../Terms/Terms";
import Carousel from "../Carousel/Carousel";
import MiniMap from "../MiniMap/MiniMap";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Terms />
      <MiniMap />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default Root;
