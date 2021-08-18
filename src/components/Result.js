import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { init } from '../redux/action';

const Result = () => {

    const dispatch = useDispatch();
    const result = useSelector((state) => state);
    
    const handleClick = () => {
        dispatch(init());
    }

    return (
        <div>
            <h3>직업가치 결과 검사표</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic veniam ratione placeat eius rerum esse vitae quasi quod cupiditate. Officia expedita vel reiciendis doloribus sed beatae dolorem at maxime omnis!</p>
            


            <Link to='/'><button onClick={handleClick}>다시 검사하기</button></Link>
        </div>
    )
}

export default Result;

