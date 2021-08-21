//action.js
export const disSetName = (name) => ({
    type: "userInfo/name",
    name,
});

export const disSetGender = (gender) => ({
    type: "userInfo/gender",
    gender,
});

export const getQuestion = (questions) => ({
    type: "test/question",
    questions,
})

export const disSetAnswer = (answer, index) => ({
    type: "test/answer",
    answer,
    index,
})

//reducer.js
// case "INCREMENT": 
//    return {
//       count: state.count + 1, action.hi
// state.count 는 reducer.js에서 