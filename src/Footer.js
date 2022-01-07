import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:stefano.rapino94@gmail.com" className="footer__link">
        s.rapino94@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/s-rapino"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com/SteRap">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
