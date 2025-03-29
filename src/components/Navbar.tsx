import React, { useEffect, useState } from "react";
import "../styles/all-style.css"; // Import CSS file
import logo from "../assets/Inkcontober_Furious-512.webp";
import ge from "../assets/ge.svg";
import { Link } from "react-router-dom";
import Languages from "./Languages";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<null | string>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<null | boolean>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCloseLanguage = () => {
    setSelectedLanguage(null);
  };

  return (
    <header className={isScrolled ? "scrolled" : "navbar_header"}>
      <div className="container">
        <div className="navbar_inner">
          <Link to={"/"}>
            <img className="logo" src={logo} alt="" />
          </Link>

          <div className="navbar_inner-right-container">
            <div onClick={() => setSelectedLanguage(!selectedLanguage)} className="languages-container">
              <img className="languages-img" src={ge} alt="" />
              <span className={isScrolled ? "languages-text_active" : "languages-text"}>ka</span>
              <svg  width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={isScrolled ? "hidden_active" : "hidden sm:flex h-6 w-6"}><path d="M11.2929 15.2929L7.70713 11.7071C7.07716 11.0771 7.52333 10 8.41424 10H15.5858C16.4767 10 16.9229 11.0771 16.2929 11.7071L12.7071 15.2929C12.3166 15.6834 11.6834 15.6834 11.2929 15.2929Z"></path></svg>
            </div>
            <ul>
              <li>
                <Link to={"/register"}>
                  <button className={isScrolled ? "register-btn_active" : "register-btn"}>
                    დარეგისტრირდი
                  </button>
                </Link>
              </li>
            </ul>
            <label className="container-menu">
              <input type="checkbox" />
              <div className="checkmark">
                <span className={isScrolled ? "menu-items" : ""}></span>
                <span className={isScrolled ? "menu-items" : ""}></span>
                <span className={isScrolled ? "menu-items" : ""}></span>
              </div>
            </label>
          </div>
        </div>
      </div>

      {selectedLanguage && <Languages onClose={handleCloseLanguage} />}
    </header>
  );
};

export default Navbar
