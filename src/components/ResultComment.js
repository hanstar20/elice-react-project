import React from 'react';
import { useSelector } from 'react-redux';
import { VALUES } from '../function/DrawResult';
import styled from 'styled-components';

const ResultComment = () => {
    const name = useSelector((state) => state.name);
    const maxValues = useSelector((state) => state.result.maxValues);
    const minValues = useSelector((state) => state.result.minValues);

    return (
        <Container>
            직업생활과 관련하여 <Highlight name="true">{name}</Highlight>님은 <Highlight max="true">{VALUES[maxValues[0] - 1]}</Highlight>(와)과{' '}
            <Highlight max="true">{VALUES[maxValues[1] - 1]}</Highlight>(을)를 가장 중요하게 생각합니다.
            <br />
            반면에 <Highlight min="true">{VALUES[minValues[0] - 1]}</Highlight>, <Highlight min="true">{VALUES[minValues[1] - 1]}</Highlight>(는)은 상대적으로 덜 중요하게 생각합니다.
        </Container>
    );
};

export default ResultComment;

const Container = styled.div`
    text-align: center;
    font-size: 18px;
    line-height: 30px;
    margin: 10px 0 50px 0;
    border: 2px solid #6a5acd;
    border-radius: 5px;
    padding: 30px 60px;
    background-color: #b1adf4;
    color: black;
`;

const Highlight = styled.span`
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => {
        if (props.name) {
            return '#6a5acd';
        } else if (props.max) {
            return '#00008B';
        } else if (props.min) {
            return '#800000';
        }
    }};
`;
