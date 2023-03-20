import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import movieReducer from "./movies/reducer";
import loginReducer from "./loginredux/reducer";
const combinedReducers = combineReducers({
    movieReducer: movieReducer,
    loginReducer:loginReducer

})

const store = legacy_createStore(combinedReducers, applyMiddleware(thunk));


export { store };
