import styled, { css } from 'styled-components';

export const ButtonBasic = styled.button`
    box-shadow: inset 0px 1px 0px 0px #ffffff;
    background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px solid #6a5acd;
    display: inline-block;
    cursor: pointer;
    color: #6a5acd;
    font-family: Arial;
    font-size: 16px;
    padding: 8px 30px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #ffffff;

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;
            cursor: default;
        `}

    :hover {
        background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
        background-color: #f6f6f6;
    }

    :active {
        position: relative;
        top: 1px;
    }
`;

export const Container = styled.div`
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
