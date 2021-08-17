import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const PsyTest = ({page, data}) => {
    const inputRef1 = useRef();

    useEffect(() => {
    }, [page])

    return (
        <div>
            <p>{page}</p>
            test 페이지
            <div>
                {data.map((question, index)=>(
                    <div>
                        <h3 key={index}>
                            {question.question}
                        </h3>
                        <input type="radio" value='1' name={index} /> {question.answer01}
                        <input type="radio" value='2' name={index} /> {question.answer02}

                    </div>
                ))}
            </div>
            <Link to={page === '1' ? "/example" : `/test/${Number(page)-1}`}><button>이전</button></Link>
            <Link to={`/test/${Number(page)+1}`}><button>다음</button></Link>
        </div>
    )
}

export default PsyTest;