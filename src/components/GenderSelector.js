import React from 'react';
import styled from 'styled-components';

const GenderSelector = ({ handleChange, genderChecked }) => {
    return (
        <Container>
            성별
            <InputWrapper>
                <Label checked={genderChecked('male')}>
                    <input type="radio" value="male" name="gender" onChange={handleChange} />
                    남자
                </Label>
                <br />
                <Label checked={genderChecked('female')}>
                    <input type="radio" value="female" name="gender" onChange={handleChange} />
                    여자
                </Label>
            </InputWrapper>
        </Container>
    );
};

export default GenderSelector;

const Container = styled.div`
    font-size: 12px;
    margin-bottom: 30px;
`;

const InputWrapper = styled.div`
    width: 180px;
    display: flex;
    margin-top: 5px;
    font-size: 15px;
    justify-content: space-around;
`;

const Label = styled.label`
    cursor: pointer;
    width: 60px;
    box-shadow: inset 0px 1px 0px 0px #ffffff;
    background: ${(props) => (props.checked ? 'linear-gradient(to bottom, #b1adf4 5%, #f6f6f6 100%)' : 'linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%)')};
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px solid #6a5acd;
    display: inline-block;
    cursor: pointer;
    color: #6a5acd;
    font-family: 'Elice Digital Baeum', sans-serif;
    font-size: 16px;
    padding: 8px 10px;
    text-align: center;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ffffff;

    :hover {
        background: ${(props) => (props.checked ? 'linear-gradient(to bottom, #f6f6f6 5%, #b1adf4 100%)' : 'linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%)')};

        background-color: #f6f6f6;
    }

    :active {
        position: relative;
        top: 1px;
    }

    > input {
        display: none;
    }
`;
