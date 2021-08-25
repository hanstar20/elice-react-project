import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 30px;
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

function InfoTable({ name, gender, time }) {
    return (
        <Container>
            <Table>
                <thead>
                    <Tr>
                        <Th>이름</Th>
                        <Th>성별</Th>
                        <Th>검사일</Th>
                    </Tr>
                </thead>
                <tbody>
                    <Tr>
                        <Td>{name}</Td>
                        <Td>{gender === 'male' ? '남' : '여'}</Td>
                        <Td>{time}</Td>
                    </Tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default InfoTable;
