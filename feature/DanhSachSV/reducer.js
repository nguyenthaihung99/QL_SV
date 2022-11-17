import { dataDsSinhVien } from './constants';
import { DsSinhVien } from './data';
import { DataListClass } from './data/datadsSV';
import { dataThu } from '../ClassTodays/data';
import { Info_GV } from '../../datafake/dataInfogv';

const initialState = {
    DsSinhVien,
    dataThu,
    DataListClass,
    Info_GV
};
export const mainReducer = (state = initialState, action) => {
    const datashow = action.payload;
    switch (action.type) {
        case dataDsSinhVien:
            return { ...state, DsSinhVien };
        default:
            return state;
    }
};
