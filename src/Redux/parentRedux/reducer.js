import { GET_PARENT_CONTROLS } from "./action"


const initialState = {
    isLocked: false,
    loading: false,
    error: false,
}

const parentReducer = (state = { ...initialState }, { type, payload }) => {
    console.log('payload', payload)
    switch (type) {
        case GET_PARENT_CONTROLS:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }



}

export default parentReducer