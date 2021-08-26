import * as API from "../api/CareerAPI";
import * as Actions from "./action";

export const getQuestion = () => {
  return async (dispatch, getState) => {
    dispatch(Actions.getQuestionRequest());

    try {
      const res = await API.GetQuestionAPI();
      console.log("res: ", res);
      dispatch(Actions.getQuestionSuccess(res));
    } catch (e) {
      dispatch(Actions.getQuestionFail(e.message));
    }
  };
};

export const getResult = () => async (dispatch, getState) => {
  const response = await GetResultAPI(postAnswer);
  // const response = await GetResultAPI(test);
  const graph = response.data.result.wonScore
    .split(" ")
    .splice(0, 8)
    .map((answer) => Number(answer.split("=")[1]));
  const maxValues = findMaxIndex(graph);
  const minValues = findMinIndex(graph);
  const jobs = await GetJobsAPI(maxValues);
  const majors = await GetMajorsAPI(maxValues);
  const time = response.data.inspct.beginDtm.split("T")[0].replace(/-/g, ".");

  dispatch(setResult(graph, jobs, majors, maxValues, minValues, time));
};
