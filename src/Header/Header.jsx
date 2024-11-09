import classes from "./Header.module.css";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import Ham from "../assets/ham.svg";
import Hamback from "../assets/hamback.svg"
import Drop from "../assets/drop.svg";
import { useState,useRef,useEffect } from "react";
const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    // Check if click is outside of dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    // Add event listener on document to detect clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  return (
    <div className={classes.mainNavWrapper} ref={dropdownRef} style={{backgroundColor: !dropdown? "#47026C" : "#6B03A4"}}>
      <div className={classes.headerWrapper} >
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
            target="_blank"
            to="https://github.com/rjn991/guessIt"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Github
          </NavLink>
        </div>

        <div className={classes.hamburger}>
          <img
            src={!dropdown?Ham:Hamback}
            onClick={() => {
              setDropdown((state) => !state);
            }}
          ></img>
        </div>
      </div>

      {dropdown && (
        <div className={classes.dropdown}>
          <div className={classes.dropdownTop}>
            <p>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </p>
            <p>
              <NavLink
                target="_blank"
                to="https://github.com/rjn991/guessIt"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Github
              </NavLink>
            </p>
          </div>
          <img className={classes.dropWave} src={Drop}></img>
        </div>
      )}
    </div>
  );
};

export default Header;
