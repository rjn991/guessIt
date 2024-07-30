import axios from "axios";
import GetPlaylist from "./GetPlaylist/GetPlaylist";
import { useEffect, useState } from "react";

function App() {
  const api = import.meta.env.VITE_YT_KEY;
  const [answer, setAnswer] = useState();
  const [data, setData] = useState();
  const [item_array, setItem_array] = useState();

  const getQueryParams = (url) => {
    let params = {};
    let parser = new URL(url);
    let query = parser.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split("=");
      params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
  };

  const fetch_vid = async () => {
    const param = getQueryParams(answer);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${param.list}&key=${api}&part=snippet&maxResults=50`
      );
      setData(response.data);
      setItem_array(response.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <input
        type="textbox"
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
      <input type="button" value="Enter" onClick={fetch_vid}></input>
      <br></br>
      {data &&
        (() => {
          return <GetPlaylist data={data} item={item_array}></GetPlaylist>;
        })()}
    </>
  );
}

export default App;
