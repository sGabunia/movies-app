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
                <a className="footer-social__link" href="#">
                  Agreement
                </a>
              </li>
              <li>
                <a className="footer-social__link" href="#">
                  Faq
                </a>
              </li>
              <li>
                <a className="footer-social__link" href="#">
                  Contact
                </a>
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
