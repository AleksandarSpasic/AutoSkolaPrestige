import React from "react";
import "./ContactStyle.css";

const Contact = () => {
  return (
    <div className="contactUS">
      <h3 className="page_title">
        Lokacija
        <div className="line"></div>
      </h3>
      <div className="google_map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.225015490919!2d21.919417115487366!3d43.330480279133646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b1ca13c64c3b%3A0x512f72c3267b06dc!2sAutoskola%20PRESTIGE%20018%20NI%C5%A0!5e0!3m2!1sen!2srs!4v1579895568909!5m2!1sen!2srs"></iframe>
      </div>
    </div>
  );
};

export default Contact;
