import { cargoBaysAction } from '../../interfaces';
import { cargoBaysReducerStateType } from '../../interfaces/reducerStateTypes/cargoBaysReducerStateType';
import { GET_ALL_SHIPMENT } from '../actionTypes/cargoBaysTypes';

const initialState: cargoBaysReducerStateType = {
    cargoBaysData: null,
};

export const cargoBaysReducer = (state = initialState, action: cargoBaysAction) => {
    const newState = { ...state };
    switch (action.type) {
        case GET_ALL_SHIPMENT: {
            newState.cargoBaysData = action.payload;
            return newState;
        }
        default: {
            return newState;
        }
    }
};
