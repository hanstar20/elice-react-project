import React from 'react';
import styled, { css } from 'styled-components';

function ExampleDetail({ answer, answer01, answer02, answer03, answer04, answerScore01, answerScore02 }) {
    if (answer === answerScore01) {
        return <Description>{answer03}</Description>;
    } else if (answer === answerScore02) {
        return <Description>{answer04}</Description>;
    } else {
        return <Description empty></Description>;
    }
}

export default ExampleDetail;

const Description = styled.p`
    margin: 10px 0 10px 0;
    font-size: 18px;
    font-weight: bold;

    ${({ empty }) =>
        empty &&
        css`
            margin-top: 24px;
        `}
`;
