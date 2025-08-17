import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt, } from "react-icons/fa";
import Logo from "../assets/img/png/logo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="header" className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="header">
          <NavLink to="/" className="logo">
            <img src={Logo} alt="Logo" />
          </NavLink>
          <button className="burger-menu" onClick={toggleMenu}>
            {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
          </button>
          <div className={`header-nav ${isMenuOpen ? "open" : ""}`}>
            <NavLink to="/tel" className="nav-a tel" onClick={toggleMenu}>
              <span>
                <FaPhoneAlt />
              </span>
              +996 555 922 522
            </NavLink>
            <NavLink to="/services" className="nav-a" onClick={toggleMenu}>
              Услуги
            </NavLink>
            <NavLink to="/about" className="nav-a" onClick={toggleMenu}>
              О нас
            </NavLink>
            <NavLink to="/why-us" className="nav-a" onClick={toggleMenu}>
              Почему мы?
            </NavLink>
            <NavLink to="/pricing" className="nav-a" onClick={toggleMenu}>
              Прайс
            </NavLink>
            <NavLink to="/contacts" className="nav-a" onClick={toggleMenu}>
              Контакты
            </NavLink>
          </div>
          {
            isMenuOpen && (
              <div className='menu'>
                <div className="menu_not" onClick={() => setIsMenuOpen(false)}></div>
                <div className="menu_container">
                  <div className="block_phone_burger">
                    <NavLink to="/tel" className="nav-a tel" onClick={toggleMenu}>
                      <span>
                        <FaPhoneAlt />
                      </span>
                      +996 555 922 522
                    </NavLink>
                    <button className="burger-menu" onClick={() => setIsMenuOpen(false)}>
                      <IoMdClose />
                    </button>
                  </div>
                  <NavLink to="/services" className="nav-a" onClick={toggleMenu}>
                    Услуги
                  </NavLink>
                  <NavLink to="/about" className="nav-a" onClick={toggleMenu}>
                    О нас
                  </NavLink>
                  <NavLink to="/why-us" className="nav-a" onClick={toggleMenu}>
                    Почему мы?
                  </NavLink>
                  <NavLink to="/pricing" className="nav-a" onClick={toggleMenu}>
                    Прайс
                  </NavLink>
                  <NavLink to="/contacts" className="nav-a" onClick={toggleMenu}>
                    Контакты
                  </NavLink>
                </div>
              </div>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default Header;