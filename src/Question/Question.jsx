import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import YouTube from "react-youtube";
import Header from "/src/Header/Header";
import classes from "./Question.module.css";
import Footer from "../Footer/Footer";
const Question = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const [quesArray, setQuesArray] = useState(location.state.quesArray);
  const [quesCount, setQuesCount] = useState(location.state.quesCount);
  const [currentCount, setCurrentCount] = useState(location.state.currentCount);
  const [score, setScore] = useState(location.state.score);
  const [player, setPlayer] = useState();
  const [isReady, setReady] = useState(false);
  const [dance, setDance] = useState(false);
  let interval;
  // console.log(quesArray);
  // console.log(quesCount)
  // console.log(currentCount)
  // console.log(score)
  const onReady = (event) => {
    setPlayer(event.target);
    setReady(true);
  };
  const toggle = () => {
    if (player.getPlayerState() != 1) {
      setDance(true);
      let mid = Math.floor(player.getDuration() / 2);
      player.unMute();
      player.setVolume(100);
      player.seekTo(mid - 5);
      player.playVideo();
      interval = setInterval(() => {
        // console.log("checking");
        if (player.getCurrentTime() > mid + 5) {
          //   console.log("done");
          player.pauseVideo();
          clearInterval(interval);
        }
      }, 1000);
    } else {
      setDance(false);
      player.pauseVideo();
      clearInterval(interval);
    }
  };
  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const toValidate = (selectedId) => {
    // if (selectedId == quesArray[currentCount].id) {
    //   console.log("correct");
    // } else {
    //   console.log("wrong");
    // }

    navigate("/result", {
      state: { quesCount, quesArray, currentCount, selectedId, score },
    });
  };
  return (
    <div className={classes.questionWrapper}>
      <Header></Header>
      <YouTube
        videoId={quesArray[currentCount].id}
        opts={opts}
        onReady={onReady}
      />
      {isReady &&
        (() => {
          return (
            <div className={classes.questionFlex}>
              <div className={classes.divLeft}>
                <button onClick={toggle}>Play/Pause</button>
              </div>

              <div className={classes.divRight}>
                {quesArray[currentCount].answers.map((data, id) => {
                  return (
                    <div key={data.id}>
                      <button
                        onClick={() => {
                          toValidate(data.id);
                        }}
                      >
                        {data.title}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })()}
      <Footer></Footer>
    </div>
  );
};

export default Question;
