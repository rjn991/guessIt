import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const api = import.meta.env.VITE_YT_KEY;
  const [answer, setAnswer] = useState();
  const [data, setData] = useState();
  const [item_array, setItem_array] = useState();
  const [quesArray, setQuesArray] = useState();
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
      // console.log(response.data);
      setData(response.data);
      setItem_array(response.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  function generateRandomNumbers(arr_len) {
    let numbers = new Set();
    while (numbers.size < 4) {
      let randomNumber = Math.floor(Math.random() * arr_len); // Generates a number between 0 and 50 inclusive
      numbers.add(randomNumber);
    }
    return Array.from(numbers);
  }

  const getQuestion = () => {
    let ques_count = 0;
    let item_array_copy = [...item_array];
    let question_array = [];
    while (item_array_copy.length > 3) {
      let random_index = generateRandomNumbers(item_array_copy.length);
      console.log(random_index);
      let q1 = item_array_copy[random_index[0]];
      let q2 = item_array_copy[random_index[1]];
      let q3 = item_array_copy[random_index[2]];
      let q4 = item_array_copy[random_index[3]];
      item_array_copy.splice(random_index[0], 1);
      console.log(q1.snippet.title);
      console.log(q2.snippet.title);
      console.log(q3.snippet.title);
      console.log(q4.snippet.title);

      let temp_ans_array = [q1,q2,q3,q4]
      let temp_random_index = generateRandomNumbers(temp_ans_array.length);


      let temp = {
        question: q1.snippet.title,
        id:q1.snippet.resourceId.videoId,
        answers: [
          temp_ans_array[temp_random_index[0]].snippet.title,
          temp_ans_array[temp_random_index[1]].snippet.title,
          temp_ans_array[temp_random_index[2]].snippet.title,
          temp_ans_array[temp_random_index[3]].snippet.title,
        ],
      };
      question_array.push(temp);
      ques_count += 1;
    }
    setQuesArray(question_array);
    console.log(question_array);
    console.log(ques_count);
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
          return (
            <div>
              <p>Total number of songs is {data.pageInfo.totalResults}</p>
              <p>Total number of songs displayed is {item_array.length}</p>
              <input
                type="button"
                value="Get Questions"
                onClick={getQuestion}
              />
            </div>
          );
        })()}

      {quesArray &&
        quesArray.map((q, pos) => {
          return (
            <div key={q.id}>
              <p>{pos+1}. {q.question}</p>
              <p>----{q.answers[0]}</p>
              <p>----{q.answers[1]}</p>
              <p>----{q.answers[2]}</p>
              <p>----{q.answers[3]}</p>
              <br></br>
            </div>
          );
        })}
      {/* {data &&
        data.items.map((data, pos) => {
          const url = `https://www.youtube.com/watch?v=${data.snippet.resourceId.videoId}`;
          return (
            <div key={data.snippet.resourceId.videoId}>
              <p>
                {pos + 1} {data.snippet.title}
              </p>
              <a href={url}>{url}</a>
              <br></br>
            </div>
          );
        })} */}
    </>
  );
}

export default App;
