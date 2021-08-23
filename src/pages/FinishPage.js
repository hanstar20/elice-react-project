import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setResult } from '../redux/action';
import { API_KEY, QESTREN_SEQ, MALE, FEMALE, TARGET, GetResultAPI, GetJobsAPI, GetMajorsAPI } from '../api/CareerAPI';
import { findMaxIndex, findMinIndex } from '../function/Calculate';
import ResultComment from '../components/ResultComment';
import styled from 'styled-components';
import { ButtonBasic } from '../components/Styled';

export const Container = styled.div`
    height: 70vh;
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Button = styled(ButtonBasic)`
    padding: 8px 80px;
`;

export const Title = styled.h1`
    color: #6a5acd;
`;

export const ResultDescription = styled.h3`
    text-align: center;
    line-height: 25px;
`;

const FinishPage = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const postAnswer = {
        apikey: API_KEY,
        qestrnSeq: QESTREN_SEQ,
        trgetSe: TARGET,
        name: state.name,
        gender: state.gender === 'male' ? MALE : FEMALE,
        grade: '1',
        startDtm: Date.now(),
        //answer array에서 post 할 때 보내줄 양식으로 변환해서 answer로 저장
        answers: state.answers
            .map((answer, index) => {
                if (index > 0) {
                    return `B${Number(index)}=${answer}`;
                }
            })
            .join(' ')
            .trim(),
    };

    useEffect(() => {
        const fetch = async () => {
            const response = await GetResultAPI(postAnswer);
            const graph = response.data.result.wonScore
                .split(' ')
                .splice(0, 8)
                .map((answer) => Number(answer.split('=')[1]));
            const maxValues = findMaxIndex(graph);
            const minValues = findMinIndex(graph);
            const jobs = await GetJobsAPI(maxValues);
            const majors = await GetMajorsAPI(maxValues);
            const time = response.data.inspct.beginDtm.split('T')[0].replace(/-/g, '.');

            dispatch(setResult(graph, jobs, majors, maxValues, minValues, time));
        };

        fetch();
    }, []);

    return (
        <Container>
            <Title>검사가 완료되었습니다.</Title>
            <ResultDescription>
                검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고, <br />
                중요 가치를 충족시킬 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.
            </ResultDescription>
            <ResultComment />
            <Link to="/result">
                <Button>결과보기</Button>
            </Link>
        </Container>
    );
};

export default FinishPage;
