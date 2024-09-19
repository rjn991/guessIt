import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import classes from "./Result.module.css"
import Footer from "../Footer/Footer"
import Header from "../Header/Header";
const Result = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const [quesArray, setQuesArray] = useState(location.state.quesArray);
  const [quesCount, setQuesCount] = useState(location.state.quesCount);
  const [currentCount, setCurrentCount] = useState(location.state.currentCount);
  const [score, setScore] = useState(location.state.score);
  const [selectedId, setSelectedId] = useState(location.state.selectedId);
  console.log(quesArray);
  console.log(quesCount);
  console.log(currentCount);
  console.log(score);
  console.log(selectedId);
  const gotoNext = (s) => {
    navigate("/question", {
      state: { quesCount, quesArray, currentCount: currentCount + 1, score: s },
    });
  };
  const gotoFinish = (s) => {
    navigate("/finish", { state: { score: s } });
  };
  const result = () => {
    if (
      currentCount == quesCount - 1 &&
      quesArray[currentCount].id == selectedId
    ) {
      return (
        <div className={classes.results}>
          <p>Correct!</p>
          <p>You gained 10 points</p>
          <p>Your score is {score + 10}</p>
          <button
            onClick={() => {
              gotoFinish(score + 10);
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
          <p>Wrong!</p>
          <p>You gained 0 points</p>
          <p>Your score is {score}</p>
          <button
            onClick={() => {
              gotoFinish(score);
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
      return (
        <div className={classes.results}>
          <p>Correct!</p>
          <p>You gained 10 points</p>
          <p>Your score is {score + 10}</p>
          <button
            onClick={() => {
              gotoNext(score + 10);
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
            <div className={classes.blobContainer}>
                  {/* <img
                    src={playPauseImg}
                    className={classes.playPng}
                    alt="play-pause"
                  ></img> */}
                  <div className={["tk-blob", classes.aniBlob].join(" ")}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 440.7 428.7"
                    >
                      <path d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z"></path>
                    </svg>
                  </div>
                </div>
          <p>Wrong!</p>
          <p>You gained 0 points</p>
          <p>Your score is {score}</p>
          <button
            onClick={() => {
              gotoNext(score);
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
