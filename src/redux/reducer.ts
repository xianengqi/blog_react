import { combineReducers } from 'redux';
import sagaReduce from './saga/reducers/index';

// combineReducers 接受一个对象，里面是一个一个小的reducer
const rootReducer = combineReducers({
  ...sagaReduce,
})

export default rootReducer;