import React from "react";
import AdultContentIcon from "../Icons/AdultContentIcon";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-wrapper">
          <nav aria-label="Footer">
            <ul className="footer-social">
              <li>
                <button className="footer-social__link">Agreement</button>
              </li>
              <li>
                <button className="footer-social__link">Faq</button>
              </li>
              <li>
                <button className="footer-social__link">Contact</button>
              </li>
            </ul>
          </nav>
          <p className="copyright">© 2013-2021 adjaranet.com</p>
        </div>
        <div className="footer-adult-caution">
          <AdultContentIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
