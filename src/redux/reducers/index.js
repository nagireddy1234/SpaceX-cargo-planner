import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { cargoBaysReducer } from './cargoBaysReducer';

export const rootReducer = combineReducers({
    uiReducer,
    cargoBaysReducer
});
