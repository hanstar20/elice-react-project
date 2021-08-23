import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import QuestionBox from '../components/QuestionBox';
import styled from 'styled-components';
import { ButtonBasic } from '../components/Styled';
import TitleAndProgress from '../components/TitleAndProgress';

const Button = styled(ButtonBasic)`
    padding: 8px 100px;
`;

export const Container = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExamplePage = () => {
    const sample = useSelector((state) => state.question[0]);
    const answer = useSelector((state) => state.answers[0]);

    return (
        <Container>
            <TitleAndProgress example />
            <div>
                <QuestionBox
                    questionNum="0"
                    question={sample.question}
                    answer01={sample.answer01}
                    answer02={sample.answer02}
                    answer03={sample.answer03}
                    answer04={sample.answer04}
                    answerScore01={sample.answerScore01}
                    answerScore02={sample.answerScore02}
                />
            </div>
            <Link to="/test/1">
                <Button disabled={answer === 'None' ? true : false}>검사시작</Button>
            </Link>
        </Container>
    );
};

export default ExamplePage;
