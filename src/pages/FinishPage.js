import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setResult } from '../redux/action';
import { API_KEY, QESTREN_SEQ, MALE, FEMALE, TARGET, GetResultAPI, GetJobsAPI, GetMajorsAPI } from '../api/CareerAPI';
import { findMaxIndex, findMinIndex } from '../function/Calculate';
import ResultComment from '../components/ResultComment';

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

            dispatch(setResult(graph, jobs, majors, maxValues, minValues));
        };

        fetch();
    }, []);

    const handleClick = () => {};

    return (
        <div>
            <h3>검사가 완료되었습니다.</h3>
            <p>
                검사결과는 여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려주고, <br />
                중요 가치를 충족시킬 수 있는 직업에 대해 생각해 볼 기회를 제공합니다.
            </p>
            <ResultComment />
            <Link to="/result">
                <button>결과보기</button>
            </Link>
            <button onClick={handleClick}>결과 받기</button>
        </div>
    );
};

export default FinishPage;
