import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import movieReducer from "./movies/reducer";
const combinedReducers = combineReducers({
    movieReducer: movieReducer
})

const store = legacy_createStore(combinedReducers, applyMiddleware(thunk));


export { store };
