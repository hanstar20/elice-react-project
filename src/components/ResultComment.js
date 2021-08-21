import React from 'react';
import { useSelector } from 'react-redux';
import { VALUES } from '../function/DrawResult';

const ResultComment = () => {
    const state = useSelector((state) => state);
    const maxValues = state.result.maxValues;
    const minValues = state.result.minValues;
    const name = state.name;

    return (
        <div>
            <p>
                {`직업생활과 관련하여 ${name}님은 ${VALUES[maxValues[0] - 1]}(와)과 ${VALUES[maxValues[1] - 1]}(을)를 가장 중요하게 생각합니다.`}
                <br />
                {`반면에 ${VALUES[minValues[0] - 1]}, ${VALUES[minValues[1] - 1]}(는)은 상대적으로 덜 중요하게 생각합니다.`}
            </p>
        </div>
    );
};

export default ResultComment;
