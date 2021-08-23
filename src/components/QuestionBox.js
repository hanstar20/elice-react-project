import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { disSetAnswer, setProgress } from '../redux/action';
import styled, { css } from 'styled-components';
import ExampleDetail from './ExampleDetail';

const Container = styled.div`
    width: 900px;
    padding: 10px 20px;
    border-radius: 3px;
    border: 1px solid #6a5acd;
    background-color: #b1adf4;
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

const InputWrapper = styled.div`
    margin-top: 0;
    font-size: 18px;
`;

const Label = styled.label`
    cursor: pointer;
    > input {
        cursor: pointer;
        margin: 0 3px 13px;
    }

    + label {
        margin-left: 150px;
    }
`;

const Question = styled.p`
    margin: 10px 0 10px 0;
    font-size: 20px;
    font-weight: bold;
    color: white;
`;

const QuestionBox = ({ questionNum, question, answer01, answer02, answer03, answer04, answerScore01, answerScore02 }) => {
    const dispatch = useDispatch();
    const answers = useSelector((state) => state.answers);
    const state = useSelector((state) => state);

    useEffect(() => {
        dispatch(setProgress(answers));
    }, [answers]);

    const handleChange = (e) => {
        dispatch(disSetAnswer(e.target.value, questionNum));
    };

    return (
        <Container>
            <Question>{`Q${questionNum}. ${question}`}</Question>
            <InputWrapper>
                <Label>
                    <input type="radio" value={answerScore01} name={`Question-${questionNum}`} checked={answers[questionNum] === answerScore01 ? true : false} onChange={handleChange} /> {answer01}
                </Label>
                <Label>
                    <input type="radio" value={answerScore02} name={`Question-${questionNum}`} checked={answers[questionNum] === answerScore02 ? true : false} onChange={handleChange} /> {answer02}
                </Label>
            </InputWrapper>
            <ExampleDetail answer={answers[questionNum]} answer01={answer01} answer02={answer02} answer03={answer03} answer04={answer04} answerScore01={answerScore01} answerScore02={answerScore02} />
        </Container>
    );
};

export default QuestionBox;
