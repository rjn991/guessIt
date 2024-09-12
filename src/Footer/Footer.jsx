import classes from "./Footer.module.css";
import footersvg from "../assets/wave.svg" 
const Footer = () => {
  return (
    <div>
      <img className={classes.svg} src={footersvg}></img>
      <div className={classes.footerWrapper}>
        <p>Copyleft 2024</p>
      </div>
    </div>
  );
};
export default Footer;
