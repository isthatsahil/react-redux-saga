import {createStore, applyMiddleware, compose} from 'redux';
import apiReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import { watchCounterChange ,watcherApiRequest} from '../saga/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(apiReducer,compose(applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

sagaMiddleware.run(watcherApiRequest);

export default store;