import classes from "./Header.module.css";
import logo from '../assets/logo.svg'
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className={classes.headerWrapper}>
        <div className={classes.logo}>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <img src={logo} alt="logo"></img>
          </NavLink>
        </div>
        <div className={classes.links}>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="https://github.com"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Github
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
