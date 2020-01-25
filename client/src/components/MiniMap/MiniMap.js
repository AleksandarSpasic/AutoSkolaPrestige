import React from "react";
import "./MiniMapStyle.css";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const MiniMap = () => {
  return (
    <div className="call_ours_section">
      <p>
        Pozovite nas odmah:
        <a href="tel:0605539959" className="call_ours_text">
          <FaPhone />
          +381 60 5539959
        </a>
      </p>
      <p>ili</p>
      <p>
        Dodjite kod nas:
        <a className="call_ours_text">
          <FaMapMarkerAlt />
          Studenička 1, Niš
        </a>
      </p>
    </div>
  );
};

export default MiniMap;
