import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
return (
  <Fade bottom duration={1000} distance="5px">
    <div className="footer-div">
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        © {new Date().getFullYear()} Lavish Verma | Open to job and internship opportunities
      </p>
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        Connect with me on <a href="https://www.linkedin.com/in/lavish-here/" target="_blank" rel="noreferrer">LinkedIn</a>
      </p>
    </div>
  </Fade>
);
}
