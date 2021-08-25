import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-size: 12px;
    margin-bottom: 30px;
`;

const InputWrapper = styled.div`
    margin-top: 5px;
    font-size: 15px;
`;

const Label = styled.label`
    cursor: pointer;
    > input {
        cursor: pointer;
        margin: 0 7px 13px;
    }
`;

const GenderSelector = ({ handleChange }) => {
    return (
        <Container>
            성별
            <InputWrapper>
                <Label>
                    <input type="radio" value="male" name="gender" onChange={handleChange} />
                    남자
                </Label>
                <br />
                <Label>
                    <input type="radio" value="female" name="gender" onChange={handleChange} />
                    여자
                </Label>
            </InputWrapper>
        </Container>
    );
};

export default GenderSelector;
