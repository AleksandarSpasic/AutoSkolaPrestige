import React from "react";
import "./AboutStyle.css";
import TrafficSign from "../../images/traffic_sign.png";

const About = () => {
  return (
    <div className="container aboutUS_wrapper">
      <h3 className="page_title">
        O nama
        <div className="line"></div>
      </h3>
      <div className="aboutUs">
        <img src={TrafficSign} alt="TrafficSign" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          tempora quisquam reiciendis. Iste nam delectus reiciendis, cumque eius
          maiores voluptatibus tenetur neque laudantium, minus dolor placeat,
          esse quam atque facilis? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Repudiandae tempora quisquam reiciendis. Iste nam
          delectus reiciendis, cumque eius maiores voluptatibus tenetur neque
          laudantium, minus dolor placeat, esse quam atque facilis? Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Repudiandae tempora
          quisquam reiciendis. Iste nam delectus reiciendis, cumque eius maiores
          voluptatibus tenetur neque laudantium, minus dolor placeat, esse quam
          atque facilis?
        </p>
      </div>
    </div>
  );
};

export default About;
