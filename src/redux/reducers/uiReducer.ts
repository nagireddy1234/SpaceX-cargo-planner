import { uiAction } from '../../interfaces';
import { LOADER } from '../actionTypes/uiTypes';

const initialState = {
    loader: false,
};

export const uiReducer = (state = initialState, action:uiAction) => {
    const newState = { ...state };
    switch (action.type) {
        case LOADER: {
            newState.loader = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
