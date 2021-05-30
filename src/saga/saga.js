import { ADD_UP, API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS } from "../redux/actionTypes";
import { takeEvery, put, delay, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

function* workerCounter() {
  yield delay(4000);
  yield put({
    type: "ADD_UP_ASYNC",
    payload: 1,
  });
}

export function* watchCounterChange() {
  yield takeLatest(ADD_UP, workerCounter);
}

const fetchApi = () => {
    return axios({
        method: "GET",
        url: "https://dog.ceo/api/breeds/image/random"
    })
}
function* workerApiChange(){
    try {
        const res = yield call(fetchApi);
        const dog = res.data.message;
        yield put({
            type : API_CALL_SUCCESS,
            payload : dog
        });  
    } catch (error) {
        yield put({
            type : API_CALL_FAILURE,
            payload : error
        });
    }
}
export function* watcherApiRequest(){
    yield takeLatest(API_CALL_REQUEST,workerApiChange)
}