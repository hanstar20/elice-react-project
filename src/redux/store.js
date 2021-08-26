import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer";

// const thunkMiddleware = (actionObject, dispatch, getState) => {
//   if (typeof actionObject === "function") {
//     dispatch(actionObject(dispatch, getState));
//   } else {
//     dispatch(actionObject);
//   }
// };

const store = createStore(Reducer, applyMiddleware(thunk));

export default store;
