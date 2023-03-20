import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import movieReducer from "./movies/reducer";
import loginReducer from "./loginredux/reducer";
import parentReducer from "./parentRedux/reducer";
const combinedReducers = combineReducers({
    movieReducer: movieReducer,
    loginReducer: loginReducer,
    parentReducer: parentReducer

})

const store = legacy_createStore(combinedReducers, applyMiddleware(thunk));


export { store };
