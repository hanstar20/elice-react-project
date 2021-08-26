import React from 'react';
import styled from 'styled-components';
import { MAJORS } from '../function/DrawResult';

function ResultMajors({ majors }) {
    return (
        <Container>
            <TitleWrapper>종사자 평균 전공별</TitleWrapper>
            <Table>
                <thead>
                    <Tr>
                        <FristTh>분야</FristTh>
                        <Th>직업명</Th>
                    </Tr>
                </thead>
                <tbody>
                    {majors.map((major, index) => {
                        if (major.length !== 0) {
                            return (
                                <Tr key={index}>
                                    <FristTd>{MAJORS[index]}</FristTd>
                                    <Td>{major.join(', ')}</Td>
                                </Tr>
                            );
                        }
                    })}
                </tbody>
            </Table>
        </Container>
    );
}

export default ResultMajors;

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
