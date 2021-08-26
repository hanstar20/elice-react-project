import React from 'react';
import styled from 'styled-components';
import { VALUES } from '../function/DrawResult';

function CheckedValue({ value, index, maxValues }) {
    if (index === maxValues[0] - 1) {
        return <Value max="true">★★{value}</Value>;
    } else if (index === maxValues[1] - 1) {
        return <Value max="true">★{value}</Value>;
    } else {
        return <Value>{value}</Value>;
    }
}

function ResultGraph({ graph, maxValues }) {
    return (
        <Container>
            <div>
                <Table>
                    <tbody>
                        {Array.from({ length: 10 }, () => 0).map((_, index) => {
                            return (
                                <tr key={index}>
                                    {Array.from({ length: 8 }, () => 0).map((_, i) => (
                                        <td key={i}></td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

                <Graph>
                    {graph.map((value, index) => {
                        return (
                            <li key={index}>
                                <CheckedValue value={value} index={index} maxValues={maxValues} />
                                <GraphValue value={value} />
                                <XAxis>{VALUES[index]}</XAxis>
                            </li>
                        );
                    })}
                </Graph>
            </div>
        </Container>
    );
}

export default ResultGraph;

const Container = styled.div`
    width: 900px;
    height: 600px;
`;

const XAxis = styled.p`
    margin-top: 10px;
    text-align: center;
`;

const Table = styled.table`
    width: 900px;
    border-collapse: collapse;
    border: 1px solid gray;
    z-index: 1;
    > tbody {
        > tr {
            border: 1px solid gray;

            > td {
                height: 40px;
                border: 1px solid gray;
                display: table-cell;
            }
        }
    }
`;

const Graph = styled.ul`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 56px;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    list-style: none;
    padding: 0px;
    z-index: 2;

    > li {
        padding: 0 10px;
    }
`;

const GraphValue = styled.div`
    height: ${(props) => `${props.value * 43}px`};
    width: 70px;
    background: #b1adf4;
`;

const Value = styled.p`
    color: ${(props) => (props.max ? '#6a5acd' : 'black')};
    font-size: 15px;
    margin-bottom: 0;
    text-align: center;
`;
