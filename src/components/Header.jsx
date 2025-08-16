import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import Logo from "../assets/img/png/logo.jpg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="header" className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="header">
          <NavLink className="logo">
            <img src={Logo} alt="Logo" />
          </NavLink>
          <div className="header-nav">
            <NavLink className="nav-a tel">
              <span>
                <FaPhoneAlt />
              </span>
              +996 555 922 522
            </NavLink>
            <NavLink className="nav-a">Услуги</NavLink>
            <NavLink className="nav-a">О нас</NavLink>
            <NavLink className="nav-a">Почему мы?</NavLink>
            <NavLink className="nav-a">Прайс</NavLink>
            <NavLink className="nav-a">Контакты</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;