import { createStore, applyMiddleware } from 'redux';
import reducerMain from './reducer';
import createSagaMiddleware from '@redux-saga/core';
// import projectSaga from '../saga/sagaProject';

const sagaMiddleWare = createSagaMiddleware();
const initialState = {};

export const store = createStore(reducerMain, initialState);
// sagaMiddleWare.run(projectSaga);
