import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import todoReducer from "./todoReducer/index";

const rootReducer = combineReducers({
  todo: todoReducer,
  theme: themeReducer,
});

export default rootReducer;
