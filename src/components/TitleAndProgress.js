import styled from 'styled-components';
import React from 'react';
import { useSelector } from 'react-redux';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TextWrapper = styled.div`
    width: 940px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const BarWrapper = styled.div`
    width: 940px;
    height: 15px;
    background-color: #dcdcdc;
    margin-bottom: 30px;
`;

export const Bar = styled.div`
    width: ${(props) => `${(props.progress / 100) * 940}px`};
    height: 15px;
    background-color: #5f9ea0;
`;

export const DescriptionWrapper = styled.div`
    width: 940px;
    margin: 10px 0 20px 0;
`;

function TitleAndProgress({ example }) {
    const progress = useSelector((state) => state.progress);

    return (
        <Container>
            <TextWrapper>
                <h2>{example === true ? '검사예시' : '검사진행'}</h2>
                <h2>{progress}%</h2>
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
