import {useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
const Result =()=> {
    let location = useLocation();
    let navigate = useNavigate();
    const [quesArray, setQuesArray] = useState(location.state.quesArray);
    const [quesCount, setQuesCount] = useState(location.state.quesCount);
    const [currentCount, setCurrentCount] = useState(location.state.currentCount);
    const [score, setScore] = useState(location.state.score);
    const [selectedId,setSelectedId] = useState(location.state.selectedId)
    console.log(quesArray);
    console.log(quesCount)
    console.log(currentCount)
    console.log(score)
    console.log(selectedId)
    const gotoNext = (s) => {
        navigate("/question", { state: {quesCount,quesArray,currentCount:currentCount+1,score:s} });
    }
    const gotoFinish = (s) => {
        navigate("/finish",{state:{score:s}})
    }   
    const result = () => {    
        if (currentCount==quesCount-1 && quesArray[currentCount].id == selectedId) {
            return (
                <>
                    <p>Correct!</p>
                    <p>You gained 10 points</p>
                    <p>Your score is {score+10}</p>
                    <button onClick={()=>{gotoFinish(score+10)}}>Next</button>
                </>
            )
        }
        else if (currentCount==quesCount-1 && quesArray[currentCount].id != selectedId) {
            return (
                <>
                    <p>Wrong!</p>
                    <p>You gained 0 points</p>
                    <p>Your score is {score}</p>
                    <button onClick={()=>{gotoFinish(score)}}>Next</button>
                </>
            )
        }
        else if (currentCount < quesCount-1 && quesArray[currentCount].id == selectedId) {
            return (
                <>
                    <p>Correct!</p>
                    <p>You gained 10 points</p>
                    <p>Your score is {score+10}</p>
                    <button onClick={()=>{gotoNext(score+10)}}>Next</button>
                </>
            )
        }
        else if (currentCount < quesCount-1 && quesArray[currentCount].id != selectedId) {
            return (
                <>
                    <p>Wrong!</p>
                    <p>You gained 0 points</p>
                    <p>Your score is {score}</p>
                    <button onClick={()=>{gotoNext(score)}}>Next</button>
                </>
            )
        }

            
    }   

    return (<>
        {result()}
        </>
    )
}
export default Result