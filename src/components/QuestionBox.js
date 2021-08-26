import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { disSetAnswer, setProgress } from '../redux/action';
import styled from 'styled-components';
import ExampleDetail from './ExampleDetail';

const QuestionBox = ({ questionNum, question, answer01, answer02, answer03, answer04, answerScore01, answerScore02 }) => {
    const dispatch = useDispatch();
    const answers = useSelector((state) => state.answers);

    useEffect(() => {
        dispatch(setProgress(answers));
    }, [dispatch, answers]);

    const handleChange = (e) => {
        dispatch(disSetAnswer(e.target.value, questionNum));
    };

    return (
        <Container>
            <Question>{`Q${questionNum}. ${question}`}</Question>
            <InputWrapper>
                <Label checked={answers[questionNum] === answerScore01 ? true : false}>
                    <input type="radio" value={answerScore01} name={`Question-${questionNum}`} checked={answers[questionNum] === answerScore01 ? true : false} onChange={handleChange} /> {answer01}
                </Label>

                <Label checked={answers[questionNum] === answerScore02 ? true : false}>
                    <input type="radio" value={answerScore02} name={`Question-${questionNum}`} checked={answers[questionNum] === answerScore02 ? true : false} onChange={handleChange} /> {answer02}
                </Label>
            </InputWrapper>
            <ExampleDetail answer={answers[questionNum]} answer01={answer01} answer02={answer02} answer03={answer03} answer04={answer04} answerScore01={answerScore01} answerScore02={answerScore02} />
        </Container>
    );
};

export default QuestionBox;

const Container = styled.div`
    width: 80%;
    max-width: 900px;
    min-width: 500px;
    padding: 10px 20px;
    border-radius: 3px;
    border: 2px solid #6a5acd;
    background-color: #b1adf4;
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

const InputWrapper = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-around;
    font-size: 18px;
`;

const Label = styled.label`
    font-family: 'Elice Digital Baeum', sans-serif;
    cursor: pointer;
    width: 200px;
    box-shadow: inset 0px 1px 0px 0px #ffffff;
    background: ${(props) => (props.checked ? 'linear-gradient(to bottom, #b1adf4 5%, #f6f6f6 100%)' : 'linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%)')};
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px solid #6a5acd;
    display: inline-block;
    cursor: pointer;
    color: #6a5acd;
    font-size: 16px;
    padding: 8px 10px;
    text-align: center;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ffffff;

    :hover {
        background: ${(props) => (props.checked ? 'linear-gradient(to bottom, #f6f6f6 5%, #b1adf4 100%)' : 'linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%)')};

        background-color: #f6f6f6;
    }

    :active {
        position: relative;
        top: 1px;
    }

    > input {
        display: none;
    }
`;

const Question = styled.p`
    margin: 10px 0 10px 0;
    font-size: 20px;
`;
