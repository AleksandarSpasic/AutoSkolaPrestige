import React, { useState, useEffect } from "react";
import "./GalleryStyle.css";
import { FaTimesCircle } from "react-icons/fa";
import axios from "axios";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [src, setSrc] = useState(false);

  useEffect(() => {
    axios.get("/photos").then(response => {
      setPhotos(response.data[0].photos);
    });
  }, []);

  return (
    <div className="container gallery_section">
      <h3 className="page_title">
        Galerija
        <div className="line"></div>
      </h3>
      <div className="gallery_wrapper">
        {photos.map((photo, index) => (
          <div
            key={index}
            style={{ background: `url(${photo})` }}
            onClick={() => setSrc(photo)}
          />
        ))}
      </div>
      {src !== false ? (
        <div className="popup_wrap">
          <div className="photo" style={{ background: `url(${src})` }}>
            <FaTimesCircle onClick={() => setSrc(false)} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Gallery;
