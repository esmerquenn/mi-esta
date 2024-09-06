import React from "react";
import "../../assets/css/Footer.css";
import behance from "/img/behance.png";
import instagram from "/img/instagram.png";
import facebook from "/img/facebook.png";
import phone from "/img/phone.png";
import pinterest from "/img/pinterest.png";
import linkedin from "/img/linkedin.png";
import SliderBrands from "./SliderBrands";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname !== "/contact";
  return (
    <>
      {isContactPage && <SliderBrands />}
      <footer className="footer">
        <div className="foot">
          <div className="icons">
            <img src={behance} alt="behance" />
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={phone} alt="phone" />
            <img src={pinterest} alt="pinterest" />
            <img src={linkedin} alt="linkedin" />
          </div>
          <a href="mailto:methGdd@gmail.com">art@miesta.com</a>
        </div>
      </footer>
      <div className="our_logo">
        <span>made by </span>
        <h5>E</h5>
        <span>smer</span>
      </div>
    </>
  );
};

export default Footer;
