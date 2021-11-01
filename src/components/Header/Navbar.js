import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownCategoria from "./DropdownCategoria";
import DropdownEntrar from "./DropdownEntrar";
import DarkModeToggle from "react-dark-mode-toggle";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdownCategoria, setDropdownCategoria] = useState(false);
  const [dropdownEntrar, setDropdownEntrar] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdownCategoria(false);
    } else {
      setDropdownCategoria(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdownCategoria(false);
    } else {
      setDropdownCategoria(false);
    }
  };

  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdownEntrar(false);
    } else {
      setDropdownEntrar(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdownEntrar(false);
    } else {
      setDropdownEntrar(false);
    }
  };

  return (
    <nav className={`navbar ${isDarkMode && "darkmode"}`}>
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <h1 className={`${!isDarkMode ? "texto-ligth" : "darklogo"}`}>
          Blue Shoes
        </h1>
      </Link>

      <div className="input-navbar">
        <input type="text" placeholder="O que Você Procura?" />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link
            to="/"
            className={`nav-links ${isDarkMode && "nav-links-dark"}`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
            to="/categoria"
            className={`nav-links ${isDarkMode && "nav-links-dark"}`}
            onClick={closeMobileMenu}
          >
            Categorias{" "}
            <i className={`fas fa-caret-down ${isDarkMode && "fasDark"}`} />
          </Link>
          {dropdownCategoria && <DropdownCategoria />}
        </li>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter1}
          onMouseLeave={onMouseLeave1}
        >
          <Link
            to="/Entrar"
            className={`nav-links ${isDarkMode && "nav-links-dark"}`}
            onClick={closeMobileMenu}
          >
            Entrar{" "}
            <i className={`fas fa-caret-down ${isDarkMode && "fasDark"}`} />
          </Link>
          {dropdownEntrar && <DropdownEntrar />}
        </li>
      </ul>
      <div class="dark">
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={70}
        />
      </div>
    </nav>
  );
}

export default Navbar;
