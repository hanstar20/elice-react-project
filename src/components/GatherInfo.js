import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { disSetName, disSetGender } from '../redux/action';

const GatherInfo = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeGender = (e) => {
        setGender(e.target.value)
    }

    const handleClick = () => {
        dispatch(disSetName(name))
        dispatch(disSetGender(gender))
    }

    return (
        <div>
            <h1>직업가치검사</h1>
            <div>
                이름<input type="text" onChange={handleChangeName} value={name}/>
                <p><input type="radio" value="male" name="gender" onChange={handleChangeGender} />남자</p>
                <p><input type="radio" value="female" name="gender" onChange={handleChangeGender} />여자</p>
                <Link to="/example" >
                    <button 
                        disabled={name !== "" && gender !== "" ? false : true} 
                        onClick={handleClick}
                    >검사시작</button>
                </Link>
            </div>
        </div>
    )
}

export default GatherInfo;
