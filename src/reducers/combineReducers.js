import menuReducer from './menuReducer';
import { combineReducers } from 'redux';
// combine reducers w redux library
const reducersCombine = combineReducers({
menu: menuReducer

});

export default reducersCombine;
