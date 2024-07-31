import { useNavigate,useLocation } from "react-router-dom"
const Finish =()=> {
    let navigate = useNavigate()
    let location = useLocation()
    return (
        <div>
            Congratulations!
            Your total score is {location.state.score}
            <br></br>
            <button onClick={()=>{navigate("/")}}>Back to home</button>
        </div>
    )
}
export default Finish