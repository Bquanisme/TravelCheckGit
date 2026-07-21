import { combineReducers } from "@reduxjs/toolkit";
import exampleReducer from "./example/reducer";

const rootReducer = combineReducers({
    example: exampleReducer,
});

export type rootState = ReturnType<typeof rootReducer>

export default rootReducer