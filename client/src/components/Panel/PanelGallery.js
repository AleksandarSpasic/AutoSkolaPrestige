import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import ImageUploader from "react-images-upload";

const PanelGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [upload, setUpload] = useState([]);

  useEffect(() => {
    axios
      .get("/photos")
      .then(response => {
        setPhotos(response.data[0]);
      })
      .catch(err => console.log(err.response));
  }, []);

  const onDrop = (pictureFiles, pictureDataURLs) => {
    setUpload(pictureDataURLs);
  };

  const uploadPhoto = () => {
    const newPhotos = {
      photos: photos.photos.concat(upload)
    };
    axios
      .put(`/photos/${photos._id}`, newPhotos)
      .then(res => {
        window.location.href = "/panel";
      })
      .catch(err => console.log(err.response));
  };

  const deletePhoto = photo => {
    let filtered = photos.photos.filter(item => item !== photo);
    let obj = {
      photos: filtered
    };
    axios
      .put(`/photos/${photos._id}`, obj)
      .then(res => {
        setPhotos(obj);
      })
      .catch(err => console.log(err.response));
  };
  return (
    <>
      <h3>Gallerija</h3>
      <ImageUploader
        withIcon={true}
        buttonText="Dodaj slike"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
        maxFileSize={5242880}
        withPreview={true}
      />
      {upload.length ? (
        <button className="upload_btn" onClick={uploadPhoto}>
          Upload images
        </button>
      ) : null}
      <div className="panel_gallerija">
        {photos.photos &&
          photos.photos.map((photo, index) => (
            <div key={index} style={{ background: `url(${photo})` }}>
              <FaTrash
                className="trash_icon"
                onClick={() => deletePhoto(photo)}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default PanelGallery;
