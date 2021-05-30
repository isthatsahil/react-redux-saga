import { ADD_UP, API_CALL_REQUEST, MINUS_DOWN } from "./actionTypes"


export const addUp = () => {
    return {
        type : ADD_UP,
        payload : 1
    }
}

export const minusDown = () => {
    return {
        type : MINUS_DOWN,
        payload : 1
    }
}

export const apiCallRequest = () => {
    return {
        type : API_CALL_REQUEST
    }
}