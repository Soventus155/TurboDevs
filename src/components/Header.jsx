import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

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
          <div className="header-logo">
            <NavLink className="logo">
              <h1>
                Turbo<span>Devs</span>
              </h1>
            </NavLink>
          </div>
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