/**
 * 1. reducer, [initialState], 增强器[enhancer]
 */

import { createStore, applyMiddleware, compose } from 'redux';
// saga的中间件
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga/sagas/index';
// saga的中间件需要创建
const sagaMiddleware = createSagaMiddleware();


// 创建一个增强器函数, 返回的是一个高阶函数
const composeEnhancer =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const store = createStore(
  rootReducer,
  composeEnhancer(
    applyMiddleware(
      sagaMiddleware
    ),
  )
);

sagaMiddleware.run(rootSaga);

export default store;
