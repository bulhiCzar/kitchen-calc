import {combineReducers} from "redux";
import {calculatorReducer} from "./reducer/calculator";
import {dataReducer} from "./reducer/data";

export const rootReducer = combineReducers({
    calc: calculatorReducer,
    data: dataReducer,
})