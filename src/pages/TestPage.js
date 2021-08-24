import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import QuestionBox from '../components/QuestionBox';
import TitleAndProgress from '../components/TitleAndProgress';
import styled from 'styled-components';
import { ButtonBasic } from '../components/Styled';

const Button = styled(ButtonBasic)`
    padding: 8px 60px;
`;

const ButtonWrapper = styled.div`
    width: 85%;
    max-width: 940px;
    min-width: 540px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Container = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TestPage = ({ page }) => {
    const questions = useSelector((state) => state.question);
    const answers = useSelector((state) => state.answers);
    const [pageQ, setPageQ] = useState([]);
    const [complete, setComplete] = useState(false);

    const CalQuestionNum = (page, index) => {
        return String(5 * (Number(page) - 1) + (Number(index) + 1));
    };

    // 슬라이싱 된 5개의 answer에서 None이 모두 없어지면 true를 리턴하도록 하는 함수
    const CompleteChecked = (startNum, endNum) => {
        if (answers.slice(startNum, endNum).find((answer) => answer === 'None') === undefined) {
            return true;
        }
    };

    const completeChecked = CompleteChecked(5 * (Number(page) - 1) + 1, 5 * Number(page) + 1);

    // 페이지가 바뀔때 마다 문제들이 갱신되도록 하는 부분
    useEffect(() => {
        setPageQ(questions.slice(5 * (Number(page) - 1), 5 * Number(page)));
        // page 넘어갈 때마다 page의 결과 값이 모두 들어가 있으면 다음 버튼을 활성화, 아니라면 비활성화
        if (completeChecked) {
            setComplete(true);
        } else {
            setComplete(false);
        }
    }, [completeChecked, page, questions]);

    // 답이 갱신될 때, 5개가 모두 체크되었는지 확인하는 부분
    useEffect(() => {
        setComplete(completeChecked);
    }, [answers, completeChecked]);

    return (
        <Container>
            <TitleAndProgress />
            {pageQ.map((question, index) => (
                <QuestionBox
                    key={index}
                    questionNum={CalQuestionNum(page, index)}
                    question={question.question}
                    answer01={question.answer01}
                    answer02={question.answer02}
                    answer03={question.answer03}
                    answer04={question.answer04}
                    answerScore01={question.answerScore01}
                    answerScore02={question.answerScore02}
                />
            ))}
            <ButtonWrapper>
                <Link to={page === '1' ? '/example' : `/test/${Number(page) - 1}`}>
                    <Button>이전</Button>
                </Link>
                <Link to={page === '6' ? '/finish' : `/test/${Number(page) + 1}`}>
                    <Button disabled={complete ? false : true} end="true">
                        다음
                    </Button>
                </Link>
            </ButtonWrapper>
        </Container>
    );
};

export default TestPage;
