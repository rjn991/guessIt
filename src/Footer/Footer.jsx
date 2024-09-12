import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <img className={classes.svg} src="/src/assets/wave.svg"></img>
      <div className={classes.footerWrapper}>
        <p>Copyleft 2024</p>
      </div>
    </div>
  );
};
export default Footer;
