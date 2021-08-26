import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { init } from '../redux/action';
import InfoTable from '../components/InfoTable';
import styled from 'styled-components';
import ResultGraph from '../components/ReusltGraph';
import ResultJobs from '../components/ResultJobs';
import ResultMajors from '../components/ResultMajors';
import { ButtonBasic } from '../components/Styled';

const ResultPage = () => {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.name);
    const gender = useSelector((state) => state.gender);
    const time = useSelector((state) => state.time);
    const result = useSelector((state) => state.result);

    const handleClick = () => {
        dispatch(init());
    };

    return (
        <Container>
            <h1>직업가치 결과 검사표</h1>
            <Description>
                직업가치관이란 직업을 선택할 때 영향을 끼치는 자신만의 믿음과 신념입니다. 따라서 여러분의 직업생활과 관련하여 포기하지 않는 무게중심의 역할을 한다고 볼 수 있습니다. 직업가치관검사는
                여러분이 직업을 선택할 때 상대적으로 어떠한 가치를 중요하게 생각하는지를 알려줍니다. 또한 본인이 가장 중요하게 생각하는 가치를 충족시켜줄 수 있는 직업에 대해 생각해 볼 기회를
                제공합니다.
            </Description>
            <InfoTable name={name} gender={gender} time={time} />
            <Strapline>직업가치관결과</Strapline>
            <ResultGraph graph={result.graph} maxValues={result.maxValues} />
            <Strapline>가치관과 관련이 높은 직업</Strapline>
            <ResultJobs jobs={result.jobs} />
            <ResultMajors majors={result.majors} />
            <Link to="/">
                <Button onClick={handleClick}>다시 검사하기</Button>
            </Link>
        </Container>
    );
};

export default ResultPage;

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Description = styled.p`
    width: 85%;
    max-width: 900px;
    min-width: 500px;
    font-size: 17.5px;
    line-height: 25px;
    margin-bottom: 35px;
`;

const Strapline = styled.h2`
    width: 85%;
    max-width: 900px;
    min-width: 500px;
    margin: 5px 0;
`;

const Button = styled(ButtonBasic)`
    padding: 8px 100px;
    margin-bottom: 100px;
`;
