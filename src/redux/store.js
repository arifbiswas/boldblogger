import { createStore , applyMiddleware } from "redux";
import { contentReducer } from "./reducer/contentReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from 'redux-thunk'
export const store = createStore(contentReducer , composeWithDevTools(applyMiddleware(thunk)))