import { useLocation } from "react-router-dom";
import { useState } from "react";
import YouTube from "react-youtube";
const Question = () => {
  let location = useLocation();
  const [quesArray, setQuesArray] = useState(location.state.quesArray);
  const [quesCount, setQuesCount] = useState(location.state.quesCount);
  const [currentCount, setCurrentCount] = useState(location.state.currentCount);
  const [score, setScore] = useState(location.state.score);
  const [player, setPlayer] = useState();
  const [isReady, setReady] = useState(false);
  let interval;
  // console.log(quesArray);
  // console.log(quesCount)
  // console.log(currentCount)
  const onReady = (event) => {
    setPlayer(event.target);
    setReady(true);
  };
  const toggle = () => {
    if (player.getPlayerState() != 1) {
      let mid = Math.floor(player.getDuration() / 2);
      player.unMute();
      player.setVolume(100);
      player.seekTo(mid - 5);
      player.playVideo();
      interval = setInterval(() => {
        // console.log("checking");
        if (player.getCurrentTime() > mid + 5) {
        //   console.log("done");
          player.pauseVideo()
          clearInterval(interval);
        }
      }, 1000);
    } else {
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
    if (selectedId == quesArray[currentCount].id) {
      console.log("correct");
    } else {
      console.log("wrong");
    }
  };
  return (
    <div>
      <YouTube
        videoId={quesArray[currentCount].id}
        opts={opts}
        onReady={onReady}
      />
      {isReady &&
        (() => {
          return (
            <div>
              <button onClick={toggle}>Play/Pause</button>
              <br></br>
              <br></br>
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
          );
        })()}
    </div>
  );
};

export default Question;
