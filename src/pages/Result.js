import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { init } from '../redux/action';

const Result = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const handleClick = () => {
        dispatch(init());
    };

    return (
        <div>
            <h3>직업가치 결과 검사표</h3>

            <p>Loading...</p>

            <Link to="/">
                <button onClick={handleClick}>다시 검사하기</button>
            </Link>
        </div>
    );
};

export default Result;
