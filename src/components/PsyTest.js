import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import QuestionBox from './QuestionBox';

const PsyTest = ({page}) => {

    const questions = useSelector((state) => state.question)
    const [pageQ, setPageQ] = useState([]);

    const CalQuestionNum = (page, index) => {
        return String(5 * (Number(page) - 1) + (Number(index) - 1))
    }

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
    }, [page])

    return (
        <div>
            <p>{page}</p>
            test 페이지
            <div>
                {pageQ.map((question, index)=>(
                    <QuestionBox 
                        questionNum={CalQuestionNum(page, index)}
                        question={question.question} 
                        answer01={question.answer01} 
                        answer02={question.answer02} 
                    />
                ))}
            </div>
            <Link to={page === '1' ? "/example" : `/test/${Number(page)-1}`}><button>이전</button></Link>
            <Link to={`/test/${Number(page)+1}`}><button>다음</button></Link>
        </div>
    )
}

export default PsyTest;