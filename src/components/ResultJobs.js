import React from 'react';
import styled from 'styled-components';
import { JOBS } from '../function/DrawResult';

const Container = styled.div`
    margin: 20px 0 30px 0;
`;

const Table = styled.table`
    width: 900px;
    border-collapse: collapse;
    border: 2px solid lightgray;
`;

const Tr = styled.tr`
    height: 35px;
    border: 2px solid lightgray;
`;

const Th = styled.th`
    border: 2px solid lightgray;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    padding: 12px 10px;
    font-size: 18px;
`;

const FristTh = styled(Th)`
    width: 20%;
`;

const Td = styled.td`
    border: 2px solid lightgray;
    display: table-cell;
    vertical-align: middle;
    text-align: left;
    padding: 12px 15px;
    line-height: 25px;
`;

const FristTd = styled(Td)`
    text-align: center;
`;

const TitleWrapper = styled.div`
    font-size: 22px;
    text-align: center;
    background-color: lightgray;
    padding: 20px 0;
    margin-bottom: 20px;
    border-radius: 8px;
`;

function ResultJobs({ jobs }) {
    return (
        <Container>
            <TitleWrapper>종사자 평균 학력별</TitleWrapper>
            <Table>
                <thead>
                    <Tr>
                        <FristTh>분야</FristTh>
                        <Th>직업명</Th>
                    </Tr>
                </thead>
                <tbody>
                    {jobs.map((job, index) => {
                        if (job.length !== 0) {
                            return (
                                <Tr key={index}>
                                    <FristTd>{JOBS[index]}</FristTd>
                                    <Td>{job.join(', ')}</Td>
                                </Tr>
                            );
                        }
                    })}
                </tbody>
            </Table>
        </Container>
    );
}

export default ResultJobs;
