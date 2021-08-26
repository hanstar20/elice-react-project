import { CalProgress } from "../function/Calculate";

const initState = {
  loading: false,
  name: "",
  gender: "",
  question: [],
  answers: Array.from({ length: 29 }, () => "None"),
  progress: 0,
  time: "",
  result: {
    graph: [],
    jobs: [],
    majors: [],
    maxValues: [],
    minValues: [],
  },
};

// reducer 만들기
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "userInfo/name":
      return {
        ...state,
        name: action.name,
      };
    case "userInfo/gender":
      return {
        ...state,
        gender: action.gender,
      };
    case "test/question/pending":
      console.log("[test/question/pending] action : ", action);
      return {
        ...state,
        loading: true,
      };

    case "test/question/fulfilled":
      console.log("[test/question/fulfilled] action : ", action);
      return {
        ...state,
        loading: false,
        question: action.questions,
      };

    case "test/question/rejected":
      console.log("[test/question/rejected] action : ", action);
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "test/answer":
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
    case "test/progress":
      const progress = CalProgress(action.answers);
      return {
        ...state,
        progress: progress,
      };
    case "test/result":
      return {
        ...state,
        time: action.time,
        result: {
          ...state.result,
          graph: action.graph,
          jobs: action.jobs,
          majors: action.majors,
          maxValues: action.maxValues,
          minValues: action.minValues,
        },
      };
    case "init":
      return initState;
    default:
      return state;
  }
};

export default Reducer;
