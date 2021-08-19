const initState = {
    name: '',
    gender: '',
    question: [],
    answers: Array.from({ length: 29 }, () => 'None'),
    result: {
        graph: [],
    },
};

// reducer 만들기
const Reducer = (state = initState, action) => {
    switch (action.type) {
        case 'userInfo/name':
            return {
                ...state,
                name: action.name,
            };
        case 'userInfo/gender':
            return {
                ...state,
                gender: action.gender,
            };
        case 'test/question':
            return {
                ...state,
                question: action.questions,
            };
        case 'test/answer':
            return {
                ...state,
                answers: state.answers.map((answer, index) => {
                    if (String(index) === action.index) {
                        return action.answer;
                    } else {
                        return answer;
                    }
                }),
            };
        case 'init':
            return {
                name: '',
                gender: '',
                answer: Array.from({ length: 29 }, () => 'None'),
                question: [],
                result: {
                    graph: [],
                },
            };
        // 케이스에 해당하지 않을때 반환할 기본값
        // return state : 아무것도 변경되지 않는다는 뜻
        default:
            return state;
    }
};

export default Reducer;
