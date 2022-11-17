import { combineReducers } from 'redux';
import { mainReducer } from './feature/DanhSachSV/reducer';
import { ReducerLogin } from './feature/LoginScreen/reducer';

const reducerMain = combineReducers({
    mainReducer,
    ReducerLogin
});
export default reducerMain;
