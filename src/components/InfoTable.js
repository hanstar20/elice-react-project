import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
    width: 900px;
    margin-bottom: 30px;
`;

const Table = styled.table`
    width: 900px;
    height: 70px;
    border-collapse: collapse;
    border: 2px solid lightgray;
`;

const Tr = styled.tr`
    border: 2px solid lightgray;
`;

const Th = styled.th`
    border: 2px solid lightgray;
    display: table-cell;
    vertical-align: middle;
    text-align: left;
    padding: 0 10px;
`;

const Td = styled.td`
    border: 2px solid lightgray;
    display: table-cell;
    vertical-align: middle;
    text-align: left;
    padding: 0 10px;
`;

function InfoTable() {
    const state = useSelector((state) => state);

    return (
        <Container>
            <Table>
                <Tr>
                    <Th>이름</Th>
                    <Th>성별</Th>
                    <Th>검사일</Th>
                </Tr>
                <Tr>
                    <Td>{state.name}</Td>
                    <Td>{state.gender === 'male' ? '남' : '여'}</Td>
                    <Td>{state.time}</Td>
                </Tr>
            </Table>
        </Container>
    );
}

export default InfoTable;
