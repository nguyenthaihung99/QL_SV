import { combineReducers } from 'redux';

import { showmodalTKB, closemodalTKB } from './constan';
import { dataThu } from './dataTKB';

const initialState = {
    showmodalTKB: false,
    data: dataThu
};
export const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case showmodalTKB:
            return {
                ...state,
                showmodalTKB: true
            };
        case closemodalTKB:
            return { ...state, showmodalTKB: false };
    }
};
export default reducerMain = combineReducers({
    MainReducer
});
