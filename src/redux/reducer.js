const initState = {
    name : "",
    gender: "",
    question: [],
    answers: [],
}

// reducer 만들기
const Reducer = (state = initState, action) => {
        switch(action.type) {
            case "userInfo/name": 
            return {
                ...state,
                name: action.name
            }
            case "userInfo/gender": 
            return {
                ...state,
                gender: action.gender
            }
            case "test/question": 
                return {
                    ...state,
                    question: action.questions
                }
            case "test/answer": 
                const newAnswer = {
                    id: action.index,
                    answer: action.answer
                }
                if (state.answers.find((answer)=> answer.id === action.index) !== undefined) {
                    return {
                        ...state,
                        answers: [
                            ...state.answers.filter((answer) => answer.id !== action.index),
                            newAnswer
                        ]
                    }
                } else {
                    return {
                        ...state,
                        answers: [
                            ...state.answers,
                            {
                                id: action.index,
                                answer: action.answer
                            }
                        ]
                    }
                }
            // 케이스에 해당하지 않을때 반환할 기본값
            // return state : 아무것도 변경되지 않는다는 뜻
            default :  
                return state; 
        }
}

export default Reducer