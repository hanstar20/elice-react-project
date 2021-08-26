import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { disSetName, disSetGender } from '../redux/action';
import GenderSelector from '../components/GenderSelector';
import styled from 'styled-components';
import { ButtonBasic } from '../components/Styled';
import { getQuestion } from '../redux/action';
import { GetQuestionAPI } from '../api/CareerAPI';

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

const Tooltip = styled.span`
    display: none;
    position: absolute;
    border: 1px solid;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 15px;
    color: white;
    background: #ff0000;
`;

const Button = styled(ButtonBasic)`
    display: inline-block;

    &:hover ${Tooltip} {
        display: ${(props) => (props.disabled ? 'block' : 'none')};
    }
`;

const DisableChecked = (name, gender) => {
    if (name === '' && gender === '') return '이름을 입력하고 성별을 선택해주세요.';
    else if (name === '') return '이름을 입력해주세요.';
    else if (gender === '') return '성별을 선택해주세요.';
};

const GatherInfoPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

    useEffect(() => {
        const fetch = async () => {
            const response = await GetQuestionAPI();
            dispatch(getQuestion(response));
        };
        fetch();
    }, [dispatch]);

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
                    <Tooltip>{DisableChecked(name, gender)}</Tooltip>
                </Button>
            </Link>
        </Container>
    );
};

export default GatherInfoPage;
