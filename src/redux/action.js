//action.js
export const setName = (name) => ({
    type: "SET_NAME",
    name,
});

export const getQuestion = (questions) => ({
    type: "GET_QUSETION",
    questions,
})


//reducer.js
// case "INCREMENT": 
//    return {
//       count: state.count + 1, action.hi
// state.count 는 reducer.js에서 