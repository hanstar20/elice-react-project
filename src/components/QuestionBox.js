import React from 'react';

const QuestionBox = ({questionNum, question, answer01, answer02}) => {

    return (
        <div>
            <h3>{`Q${questionNum}. ${question}`}
            </h3>
            <input type="radio" value='1' name={`Question-${questionNum}`} /> {answer01}
            <input type="radio" value='2' name={`Question-${questionNum}`} /> {answer02}
        </div>
    )
}

export default QuestionBox;