import { useLocation } from 'react-router-dom';

const Question = () => {
    let location = useLocation();
    console.log(location)
};

export default Question
