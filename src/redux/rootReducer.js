import { combineReducers } from "redux";
import { likesReducer } from "./likesReduce";
import { inputReducer } from "./inputReducer";

export const rootReducer = combineReducers({
    likesReducer,
    inputReducer
});