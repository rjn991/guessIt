import { useState } from "react";
import YouTube from "react-youtube";

const Playback = () => {
  const [player, setPlayer] = useState();
  const [isReady, setReady] = useState(false);
  const onReady = (event) => {
    setPlayer(event.target);
    setReady(true);
  };
  const toggle = () => {
    if (player.getPlayerState()!=1){
      player.playVideo();
    }
    else {
      player.pauseVideo();
    }

  };
  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      start: 4,
    },
  };
  return (
    <div>
      <YouTube videoId="R5HZqHxuQkU" opts={opts} onReady={onReady} />
      {isReady &&
        (() => {
          return <button onClick={toggle}>Play/Pause</button>;
        })()}
    </div>
  );
};
export default Playback;
