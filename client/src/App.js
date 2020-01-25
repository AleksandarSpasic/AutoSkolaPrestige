import React from "react";

// Components
import Navbar from "./components/Navbar/Navbar";
import Terms from "./components/Terms/Terms";
import Carousel from "./components/Carousel/Carousel";
import MiniMap from "./components/MiniMap/MiniMap";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
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

export default App;
