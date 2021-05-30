import { ADD_UP, API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS, MINUS_DOWN } from "./actionTypes";



export const rootReducer = (state = {counter : 0}, action) => {
     switch(action.type) {
         case 'ADD_UP_ASYNC' : return {
            counter : state.counter += action.payload
         }
         case MINUS_DOWN : return {
            counter : state.counter -= action.payload
         }
         default : return state
     }
}

const initialState = {
    fetching : false,
    dog : '',
    error : ''
}
 const apiReducer = (state=initialState,action) => {

    switch(action.type) {
        case API_CALL_REQUEST : return{
            ...state,
            fetching : true,
        }
        case API_CALL_SUCCESS : return{
            ...state,
            dog : action.payload,
            fetching: false,
        }
        case API_CALL_FAILURE : return {
            ...state,
            fetching : false,
            error : action.payload
        }

        default : return state
    }
}

export default apiReducer;