import React from 'react';

const GenderSelector = ({ handleChange }) => {
    return (
        <div>
            <p>
                <input type="radio" value="male" name="gender" onChange={handleChange} />
                남자
            </p>
            <p>
                <input type="radio" value="female" name="gender" onChange={handleChange} />
                여자
            </p>
        </div>
    );
};

export default GenderSelector;
