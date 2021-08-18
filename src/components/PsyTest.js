import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import QuestionBox from './QuestionBox';

const PsyTest = ({page}) => {

    const questions = useSelector((state) => state.question)
    const answers = useSelector((state) => state.answers)
    const [pageQ, setPageQ] = useState([]);
    const [complete, setComplete] = useState(false)

    const CalQuestionNum = (page, index) => {
        return String(5 * (Number(page) - 1) + (Number(index) + 1))
    }

    // 슬라이싱 된 5개의 answer에서 None이 모두 없어지면 true를 리턴하도록 하는 함수
    const CompleteChecked = (startNum, endNum) => {
        if (answers.slice(startNum, endNum).find((answer) => answer === "None") === undefined) {
            return true
        }
    }
    // 페이지가 바뀔때 마다 문제들이 갱신되도록 하는 부분
    useEffect(() => {
        setPageQ(() => {
            switch(page){
                case "1":
                    return questions.slice(0, 5)
                case "2":
                    return questions.slice(5, 10)
                case "3":
                    return questions.slice(10, 15)
                case "4":
                    return questions.slice(15, 20)
                case "5":
                    return questions.slice(20, 25)
                case "6":
                    return questions.slice(25)
                default:
                    return 
            }
        })
        // page 넘어갈 때마다 우선 다음 버튼 비활성화
        setComplete(false);
    }, [page])

    // 답이 갱신될 때, 5개가 모두 체크되었는지 확인하는 부분
    useEffect(() => {
        setComplete(() => {
            switch(page){
                case "1":
                    return setComplete(CompleteChecked(1, 6));
                case "2":
                    return setComplete(CompleteChecked(6, 11));
                case "3":
                    return setComplete(CompleteChecked(11, 16));
                case "4":
                    return setComplete(CompleteChecked(16, 21));
                case "5":
                    return setComplete(CompleteChecked(21, 26));
                case "6":
                    return setComplete(CompleteChecked(26));
                default:
                    return 
            }
        })
    }, [answers])

    return (
        <div>
            <p>{page}</p>
            test 페이지
            <div>
                {pageQ.map((question, index)=>(
                    <QuestionBox
                        key = {index}
                        questionNum={CalQuestionNum(page, index)}
                        question={question.question} 
                        answer01={question.answer01} 
                        answer02={question.answer02} 
                        answer03={question.answer03} 
                        answer04={question.answer04}
                        answerScore01={question.answerScore01}
                        answerScore02={question.answerScore02}
                    />
                ))}
            </div>
            <Link to={page === '1' ? "/example" : `/test/${Number(page)-1}`}><button>이전</button></Link>
            <Link to={page === '6' ? "/finish" : `/test/${Number(page)+1}`}>
                <button disabled={complete ? false : true}>다음</button>
            </Link>
        </div>
    )
}

export default PsyTest;