import { combineReducers } from "redux";
import { likesReducer } from "./likesReduce";
import { inputReducer } from "./inputReducer";
import { commentsReducer } from "./commentsReducer";

export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    commentsReducer
});