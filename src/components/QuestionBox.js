import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { disSetAnswer } from '../redux/action';

const QuestionBox = ({ questionNum, question, answer01, answer02, answer03, answer04, answerScore01, answerScore02 }) => {
    const dispatch = useDispatch();
    const answers = useSelector((state) => state.answers);

    const handleChange = (e) => {
        dispatch(disSetAnswer(e.target.value, questionNum));
        console.log(answers);
    };

    const ExampleDetail = () => {
        const checked = answers[questionNum];
        if (checked === answerScore01) {
            return (
                <p>
                    {answer01}: {answer03}
                </p>
            );
        } else if (checked === answerScore02) {
            return (
                <p>
                    {answer02}: {answer04}
                </p>
            );
        } else {
            return <></>;
        }
    };

    return (
        <div>
            <h3>{`Q${questionNum}. ${question}`}</h3>
            <input type="radio" value={answerScore01} name={`Question-${questionNum}`} checked={answers[questionNum] === answerScore01 ? true : false} onChange={handleChange} /> {answer01}
            <input type="radio" value={answerScore02} name={`Question-${questionNum}`} checked={answers[questionNum] === answerScore02 ? true : false} onChange={handleChange} /> {answer02}
            {ExampleDetail()}
        </div>
    );
};

export default QuestionBox;
