import { GET_MOVIE_DATA } from "./actionType"

const initialState = {
    loading: false,
    error: false,
    type: ""
}

const movieReducer = (state = { ...initialState }, { type, payload }) => {
    console.log('payload', payload)
    switch (type) {
        case GET_MOVIE_DATA:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }



}

export default movieReducer