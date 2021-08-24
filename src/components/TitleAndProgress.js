import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AnimatedNumber from 'react-animated-number';

const Container = styled.div`
    width: 85%;
    max-width: 940px;
    min-width: 540px;
    display: flex;
    flex-direction: column;
`;

const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const BarWrapper = styled.div`
    width: 100%;
    height: 16px;
    background-color: #dcdcdc;
    margin-bottom: 30px;
    border-radius: 4px;
`;

const Bar = styled.div`
    width: ${(props) => `${props.progress}%`};
    height: 16px;
    background-color: #5f9ea0;
    border-radius: 4px;
    transition: width ease 0.5s;
`;

const DescriptionWrapper = styled.div`
    width: 940px;
    margin: 10px 0 20px 0;
`;

const Number = styled(AnimatedNumber)`
    transition: 0.3s ease-out;
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`;

function TitleAndProgress({ example }) {
    const progress = useSelector((state) => state.progress);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        setPercent(progress);
    }, [progress]);
    return (
        <Container>
            <TextWrapper>
                <h2>{example === true ? '검사예시' : '검사진행'}</h2>
                <Number value={percent} stepPrecision={0} formatValue={(n) => `${n}%`} />
            </TextWrapper>
            <BarWrapper>
                <Bar progress={progress} />
            </BarWrapper>
            {example === true ? (
                <DescriptionWrapper>
                    <h3>
                        직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요. <br />
                        가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.
                    </h3>
                </DescriptionWrapper>
            ) : (
                <></>
            )}
        </Container>
    );
}

export default TitleAndProgress;
