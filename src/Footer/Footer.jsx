import classes from "./Footer.module.css";
import footersvg from "../assets/wave.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <img className={classes.svg} src={footersvg}></img>
      <div className={classes.footerWrapper}>
        <div className={classes.icons}>
          <NavLink target="_blank" to="https://github.com/rjn991">
            <FontAwesomeIcon icon={faGithubSquare} />
          </NavLink>
          <NavLink target="_blank" to="https://ranjan.tech/">
            <FontAwesomeIcon icon={faGlobe} />
          </NavLink>
          <NavLink target="_blank" to="https://www.linkedin.com/in/rjn991/">
            <FontAwesomeIcon icon={faLinkedin} />
          </NavLink>
        </div>
        <p className={classes.footerText}>
          Copyleft Forever <FontAwesomeIcon icon={faHeart} /> | Powered By{" "}
          <NavLink to="https://vercel.com/" target="_blank">
          Vercel
          </NavLink>
        </p>
      </div>
    </div>
  );
};
export default Footer;
