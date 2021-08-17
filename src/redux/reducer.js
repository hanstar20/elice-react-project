const initState = {
    name : "",
    gender: "",
    question: [],
    answer: [],
}

// reducer 만들기
const Reducer = (state = initState, action) => {
        switch(action.type) {
            case "GET_QUSETION": 
                return {
                    ...state,
                    question: action.questions
                }
            // 케이스에 해당하지 않을때 반환할 기본값
            // return state : 아무것도 변경되지 않는다는 뜻
            default :  
                return state; 
        }
}

export default Reducer