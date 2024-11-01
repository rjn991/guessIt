import { useNavigate, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classes from "./Finish.module.css";
import star from '../assets/star.svg'
import { useSelector } from "react-redux";
const Finish = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const score = useSelector((state)=>state.playlist.score) 

  return (
    <div className={classes.finishWrapper}>
      <Header></Header>
      <div className={classes.congo}>
        <div className={classes.blobContainer}>
          <img
            src={star}
            className={classes.starPng}
            alt="star"
          ></img>
          <div className={["tk-blob", classes.aniBlob].join(" ")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.7 428.7">
              <path d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z"></path>
            </svg>
          </div>
        </div>
        <br></br>
        
        <p className={classes.heading}>Congratulations!</p>
        
        <p>Your total score is {score}</p>
        
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back to home
        </button>
        
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Finish;
