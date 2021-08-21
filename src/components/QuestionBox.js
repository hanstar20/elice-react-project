import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { disSetAnswer } from '../redux/action';

const QuestionBox = ({questionNum, question, answer01, answer02, answer03, answer04}) => {
    const dispatch = useDispatch();
    const answers = useSelector((state) => state.answers)

    const handleChange = (e) => {
        dispatch(disSetAnswer(e.target.value, questionNum));
    }
    
    const ExampleDetail = () => {
        const checked = answers.find((answer)=> answer.id === questionNum);
        if (checked && checked.answer == '1'){
            return <p>{answer01}: {answer03}</p>
        } else if (checked && checked.answer == '2') {
            return <p>{answer02}: {answer04}</p>
        } else {
            return <></>
        }
    }

    return (
        <div>
            <h3>{`Q${questionNum}. ${question}`}
            </h3>
            <input 
                type="radio" 
                value="1"
                name={`Question-${questionNum}`} 
                checked={
                    answers.find((answer)=> answer.id === questionNum) && 
                    answers.find((answer)=> answer.id === questionNum).answer === "1" ? 
                    true : false} 
                onChange={handleChange}
            /> {answer01}
            <input 
                type="radio" 
                value="2"
                name={`Question-${questionNum}`} 
                checked={
                    answers.find((answer)=> answer.id === questionNum) && 
                    answers.find((answer)=> answer.id === questionNum).answer === "2" ? 
                    true : false}
                onChange={handleChange}
            /> {answer02}
            {ExampleDetail()}
        </div>
    )
}

export default QuestionBox;