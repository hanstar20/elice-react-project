//action.js
export const disSetName = (name) => ({
    type: 'userInfo/name',
    name,
});

export const disSetGender = (gender) => ({
    type: 'userInfo/gender',
    gender,
});

export const getQuestion = (questions) => ({
    type: 'test/question',
    questions,
});

export const disSetAnswer = (answer, index) => ({
    type: 'test/answer',
    answer,
    index,
});

export const setProgress = (answers) => ({
    type: 'test/progress',
    answers,
});

export const setResult = (graph, jobs, majors, maxValues, minValues, time) => ({
    type: 'test/result',
    graph,
    jobs,
    majors,
    maxValues,
    minValues,
    time,
});

export const init = () => ({
    type: 'init',
});
