import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GetPlaylist = (props) => {
  const data = props.data;
  const item_array = props.item;
  const [quesArray, setQuesArray] = useState();
  const [maxQuesCount,setMaxQuesCount] = useState();
  const [quesCount,setQuesCount] = useState()
  const navigate = useNavigate();
  
  function generateRandomNumbers(arr_len) {
    let numbers = new Set();
    while (numbers.size < 4) {
      let randomNumber = Math.floor(Math.random() * arr_len);
      numbers.add(randomNumber);
    }
    return Array.from(numbers);
  }

  const getQuestion = () => {
    let ques_count = 0
    let item_array_copy = [...item_array];
    let question_array = [];
    while (item_array_copy.length > 3) {
      let random_index = generateRandomNumbers(item_array_copy.length);
      //   console.log(random_index);
      let q1 = item_array_copy[random_index[0]];
      let q2 = item_array_copy[random_index[1]];
      let q3 = item_array_copy[random_index[2]];
      let q4 = item_array_copy[random_index[3]];
      item_array_copy.splice(random_index[0], 1);
      //   console.log(q1.snippet.title);
      //   console.log(q2.snippet.title);
      //   console.log(q3.snippet.title);
      //   console.log(q4.snippet.title);

      let temp_ans_array = [q1, q2, q3, q4];
      let temp_random_index = generateRandomNumbers(temp_ans_array.length);

      let temp = {
        question: q1.snippet.title,
        id: q1.snippet.resourceId.videoId,
        answers: [
          {
            title: temp_ans_array[temp_random_index[0]].snippet.title,
            id: temp_ans_array[temp_random_index[0]].snippet.resourceId.videoId,
          },
          {
            title: temp_ans_array[temp_random_index[1]].snippet.title,
            id: temp_ans_array[temp_random_index[1]].snippet.resourceId.videoId,
          },
          {
            title: temp_ans_array[temp_random_index[2]].snippet.title,
            id: temp_ans_array[temp_random_index[2]].snippet.resourceId.videoId,
          },
          {
            title: temp_ans_array[temp_random_index[3]].snippet.title,
            id: temp_ans_array[temp_random_index[3]].snippet.resourceId.videoId,
          },
        ],
      };
      question_array.push(temp);
      ques_count+=1
      
    }
    setQuesArray(question_array);
    setMaxQuesCount(ques_count);
    console.log(question_array);
    console.log(ques_count);
  };

  const startGame = () => {
    if(quesCount>0 && quesCount<=maxQuesCount) {
        navigate("/question", { state: {quesCount,quesArray,currentCount:0} });
    }
  }

  useEffect(()=>{
    getQuestion()
  },[item_array])


  
  return (
    <div>
      <p>Max Number of questions is : {maxQuesCount}</p>
      <p>Enter the number of questions(should be &lt;= {maxQuesCount}): </p>
      <input type="number" onChange={(e)=> {setQuesCount(e.target.value)}}></input>
      <br></br><br></br>
      <input type="button" value="start" onClick={startGame}></input>
      {/* {quesArray &&
        quesArray.map((q, pos) => {
          return (
            <div key={q.id}>
              <p>
                {pos + 1}. {q.question}
              </p>
              <p>----{q.answers[0].title}</p>
              <p>----{q.answers[1].title}</p>
              <p>----{q.answers[2].title}</p>
              <p>----{q.answers[3].title}</p>
              <br></br>
            </div>
          );
        })} */}
    </div>
  );
};

export default GetPlaylist;
