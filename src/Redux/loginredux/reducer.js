

const initialState = {
    Auth: false,
    error: false,
    user: {},
    updated: '',
}

const loginReducer = (state = { ...initialState }, { type, payload }) => {
    //    console.log("loginreducer",payload)
    switch (type) {
        case "login_now":
            return {
                ...state,
                ...payload,
            }
        default:
            return state
    }



}

export default loginReducer