import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import QuestionBox from './QuestionBox';

const Example = () => {

    const sample = useSelector((state) => state.question[0])
    const answer = useSelector((state) => state.answers[0])

    return (
        <div>
            <h2>검사예시</h2>
            <p>직업과 관련된 두개의 가치 중에서 자기에게 더 중요한 가치에 표시하세요.</p>
            <p>가치의 뜻을 잘 모르겠다면 문항 아래에 있는 가치의 설명을 확인해보세요.</p>
            <div>
                <QuestionBox 
                    questionNum="0" 
                    question={sample.question} 
                    answer01={sample.answer01} 
                    answer02={sample.answer02}
                    answer03={sample.answer03}
                    answer04={sample.answer04}
                    answerScore01={sample.answerScore01}
                    answerScore02={sample.answerScore02}
                />
            </div>
            <Link to="/test/1">
                <button
                    disabled={answer === "None" ? true : false }      
                >검사시작</button>
            </Link>
        </div>
    )
}

export default Example;