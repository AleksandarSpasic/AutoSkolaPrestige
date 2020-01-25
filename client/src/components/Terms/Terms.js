import React from "react";
import "./TermsStyle.css";
import CarImage from "../../images/car.png";

const Terms = () => {
  return (
    <div className="container terms_section">
      <h3 className="page_title">
        O terminima
        <div className="line"></div>
      </h3>
      <div className="terms_row">
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
        <img src={CarImage} alt="car" />
      </div>
    </div>
  );
};

export default Terms;
