import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import classes from "./Result.module.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HappyFace from "../assets/happy.svg";
import SadFace from "../assets/sad.svg";

import {setQuesArray,setQuesCount,setMaxQues,setCurrentCount,incScore} from '../features/playlistSlice'
import { useSelector,useDispatch } from "react-redux";

const Result = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const dispatch = useDispatch();


  const quesArray = useSelector((state) => state.playlist.quesArray)
  const quesCount =  useSelector((state)=>state.playlist.quesCount)
  const currentCount = useSelector((state)=>state.playlist.currentCount)
  const score = useSelector((state)=>state.playlist.score) 
  const [selectedId, setSelectedId] = useState(location.state.selectedId);
  const [scoreupdated,setScoreUpdated] = useState(false)

  console.log(quesArray);
  console.log(quesCount);
  console.log(currentCount);
  console.log(score);
  console.log(selectedId);


  const gotoNext = () => {
    dispatch(setCurrentCount(currentCount+1))
    navigate("/question");
  };
  const gotoFinish = () => {
    navigate("/finish");
  };

  const correctFace = () => {
    return (
      <div className={classes.blobContainer}>
        <img src={HappyFace} className={classes.facePng} alt="happy"></img>
        <div className={["tk-blob", classes.aniBlob].join(" ")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 428.4 394.6">
            <path d="M369.4 109.2c43.2 55.3 71.5 121.4 53.4 167.3-18.2 45.8-82.8 71.4-140.5 91.7-57.8 20.4-108.7 35.4-152.9 20.3C85.1 373.4 47.6 328.3 23.2 267c-24.5-61.2-35.8-138.6-2.5-191.7C54.1 22.2 132-6.6 200 1.3c68 7.9 126.1 52.5 169.4 107.9z"></path>
          </svg>
        </div>
      </div>
    );
  };

  const wrongFace = () => {
    return (
      <div className={classes.blobContainer}>
        <img src={SadFace} className={classes.facePng} alt="happy"></img>
        <div className={["tk-blob", classes.aniBlob].join(" ")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 428.4 394.6">
            <path d="M369.4 109.2c43.2 55.3 71.5 121.4 53.4 167.3-18.2 45.8-82.8 71.4-140.5 91.7-57.8 20.4-108.7 35.4-152.9 20.3C85.1 373.4 47.6 328.3 23.2 267c-24.5-61.2-35.8-138.6-2.5-191.7C54.1 22.2 132-6.6 200 1.3c68 7.9 126.1 52.5 169.4 107.9z"></path>
          </svg>
        </div>
      </div>
    );
  };

  const result = () => {
    if (
      currentCount == quesCount - 1 &&
      quesArray[currentCount].id == selectedId
    ) {
      if(!scoreupdated) {
        dispatch(incScore())
        setScoreUpdated(true)
      }
      return (
        <div className={classes.results}>
          {correctFace()}
          <br></br>
          <p className={classes.heading}>Correct!</p>
          <p>You gained 10 points</p>
          <p>Your score is {score}</p>
          <button
            onClick={() => {
              gotoFinish();
            }}
          >
            Next
          </button>
        </div>
      );
    } else if (
      currentCount == quesCount - 1 &&
      quesArray[currentCount].id != selectedId
    ) {
      return (
        <div className={classes.results}>
          {wrongFace()}
          <br></br>
          <p className={classes.heading}>Wrong!</p>
          <p>You gained nothing</p>
          <p>Your score is {score}</p>
          <button
            onClick={() => {
              gotoFinish();
            }}
          >
            Next
          </button>
        </div>
      );
    } else if (
      currentCount < quesCount - 1 &&
      quesArray[currentCount].id == selectedId
    ) {
      if(!scoreupdated) {
        dispatch(incScore())
        setScoreUpdated(true)
      }
      return (
        <div className={classes.results}>
          {correctFace()}
          <br></br>
          <p className={classes.heading}>Correct!</p>
          <p>You gained 10 points</p>
          <p>Your score is {score}</p>
          <button
            onClick={() => {
              gotoNext();
            }}
          >
            Next
          </button>
        </div>
      );
    } else if (
      currentCount < quesCount - 1 &&
      quesArray[currentCount].id != selectedId
    ) {
      return (
        <div className={classes.results}>
          {wrongFace()}
          <br></br>
          <p className={classes.heading}>Wrong!</p>
          <p>You gained nothing</p>
          <p>Your score is {score}</p>
          <button
            onClick={() => {
              gotoNext();
            }}
          >
            Next
          </button>
        </div>
      );
    }
  };

  return (
    <div className={classes.resultWrapper}>
      <Header></Header>
      {result()}
      <Footer></Footer>
    </div>
  );
};
export default Result;
