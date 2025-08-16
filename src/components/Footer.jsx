import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
<<<<<<< HEAD
    return(
        <div id="footer">
            <div className="container">
                <div className="footer">
                    
                </div>
=======
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer-one">
            <div className="fonter-logo">
              <h1>TurboDevs</h1>
>>>>>>> b7795bc (footer css)
            </div>
            <div className="footer-icon">
              <span>
                <FaInstagram />
              </span>
              <span>
                <FaWhatsapp />
              </span>
              <span>
                <BsTelegram />
              </span>
            </div>
          </div>
          <div className="footer-line"></div>
          <div className="footer-two">
            <div className="footer-text">
              <p>Все права защищены</p>
            </div>
            <div className="footer-nav">
              <NavLink className="nav-links">Услуги</NavLink>
              <NavLink className="nav-links">О нас</NavLink>
              <NavLink className="nav-links">Почему мы?</NavLink>
              <NavLink className="nav-links">Прайс</NavLink>
              <NavLink className="nav-links">Контакты</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
