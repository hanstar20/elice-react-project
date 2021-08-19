import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { disSetName, disSetGender } from '../redux/action';
import GenderSelector from '../components/GenderSelector';
import { useEffect } from 'react';

const GatherInfo = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const state = useSelector((state) => state);

    useEffect(() => {
        console.log(state);
    }, []);
    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeGender = (e) => {
        setGender(e.target.value);
    };

    const handleClick = () => {
        dispatch(disSetName(name));
        dispatch(disSetGender(gender));
    };

    return (
        <div>
            <h1>직업가치검사</h1>
            <div>
                이름
                <input type="text" onChange={handleChangeName} value={name} />
                <GenderSelector handleChange={handleChangeGender} />
                <Link to="/example">
                    <button disabled={name !== '' && gender !== '' ? false : true} onClick={handleClick}>
                        검사시작
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default GatherInfo;
