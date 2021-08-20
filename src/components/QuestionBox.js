import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { disSetAnswer, setProgress } from '../redux/action';
import styled, { css } from 'styled-components';

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

const Description = styled.p`
    margin: 3px 0 3px 0;
    font-size: 18px;
    font-weight: bold;
    color: white;

    ${({ empty }) =>
        empty &&
        css`
            margin-top: 21.5px;
        `}
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
        console.log(state);
    };

    const ExampleDetail = () => {
        const checked = answers[questionNum];
        if (checked === answerScore01) {
            return (
                <Description>
                    {answer01}: {answer03}
                </Description>
            );
        } else if (checked === answerScore02) {
            return (
                <Description>
                    {answer02}: {answer04}
                </Description>
            );
        } else {
            return <Description empty />;
        }
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
            {ExampleDetail()}
        </Container>
    );
};

export default QuestionBox;
