import React from "react";
import personalLogo from "../Media/logo.png";

function Header(props) {
  const [navOpen, setNavOpen] = React.useState(false);

  function onChange() {
    setNavOpen(!navOpen);
  }
  function closeNav() {
    setNavOpen(false);
  }

  const nav_open = navOpen ? "nav_open" : null;
  const nav_list_closed = navOpen ? "nav__list" : "nav_list_closed nav__list";

  return (
    <header className={`${nav_open}`} id="header">
      <div className="logo">
        <img
          src={personalLogo}
          alt=""
          className="nav__logo"
          onClick={() => {
            props.onRouteChange("home");
          }}
        />
      </div>
      <button
        className="nav-toogle"
        aria-label="toogle navigation"
        onClick={onChange}
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className={`${nav_list_closed}`} onClick={closeNav}>
          <li
            className="nav__item"
            onClick={() => {
              props.onRouteChange("home");
            }}
          >
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li
            className="nav__item"
            onClick={() => {
              props.onRouteChange("home");
            }}
          >
            <a href="#services" className="nav__link">
              My Services
            </a>
          </li>
          <li
            className="nav__item"
            onClick={() => {
              props.onRouteChange("home");
            }}
          >
            <a href="#about" className="nav__link">
              About me
            </a>
          </li>
          <li
            className="nav__item"
            onClick={() => {
              props.onRouteChange("home");
            }}
          >
            <a href="#work" className="nav__link">
              My work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
