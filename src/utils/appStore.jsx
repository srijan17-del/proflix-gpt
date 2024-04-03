import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
// import { combineReducers } from "redux";
// const reducer = combineReducers({
//   // here we will be adding reducers
// });
const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default appStore;
