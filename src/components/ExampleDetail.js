import React from 'react';
import styled, { css } from 'styled-components';

const Description = styled.p`
    margin: 3px 0 3px 0;
    font-size: 18px;
    font-weight: bold;
    color: white;

    ${({ empty }) =>
        empty &&
        css`
            margin-top: 24px;
        `}
`;

function ExampleDetail({ answer, answer01, answer02, answer03, answer04, answerScore01, answerScore02 }) {
    if (answer === answerScore01) {
        return (
            <Description>
                {answer01}: {answer03}
            </Description>
        );
    } else if (answer === answerScore02) {
        return (
            <Description>
                {answer02}: {answer04}
            </Description>
        );
    } else {
        return <Description empty></Description>;
    }
}

export default ExampleDetail;
