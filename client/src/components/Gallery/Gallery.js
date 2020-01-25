import React from "react";
import "./GalleryStyle.css";

const Gallery = () => {
  return (
    <div className="container gallery_section">
      <h3 className="page_title">
        Galerija
        <div className="line"></div>
      </h3>
      <div className="gallery_wrapper">
        <div className="gallery_item_1"></div>
        <div className="gallery_item_2"></div>
        <div className="gallery_item_3"></div>
        <div className="gallery_item_1"></div>
        <div className="gallery_item_2"></div>
        <div className="gallery_item_3"></div>
        <div className="gallery_item_1"></div>
        <div className="gallery_item_2"></div>
        <div className="gallery_item_3"></div>
      </div>
    </div>
  );
};

export default Gallery;
