import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { disSetName, disSetGender } from '../redux/action';
import GenderSelector from '../components/GenderSelector';
import styled from 'styled-components';
import { ButtonBasic } from '../components/Styled';

export const Container = styled.div`
    height: 70vh;
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const NameInputWrapper = styled.div`
    font-size: 12px;
`;

const Title = styled.h1`
    margin-bottom: 50px;
`;

const Input = styled.input`
    width: 170px;
    height: 25px;
    margin-bottom: 30px;
`;

const Button = styled(ButtonBasic)``;

const GatherInfoPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

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
        <Container>
            <Title>직업가치관검사</Title>
            <NameInputWrapper>
                이름
                <br />
                <Input type="text" onChange={handleChangeName} value={name} />
            </NameInputWrapper>
            <GenderSelector handleChange={handleChangeGender} />
            <Link to="/example">
                <Button disabled={name !== '' && gender !== '' ? false : true} onClick={handleClick}>
                    검사시작
                </Button>
            </Link>
        </Container>
    );
};

export default GatherInfoPage;
