import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./features/todo";

export const store = createStore(reducer, applyMiddleware(thunk));
