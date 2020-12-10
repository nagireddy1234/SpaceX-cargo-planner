import { toast } from 'react-toastify';
import { store } from '../redux/store/Store';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        toast.success('Failed to  load data. ');
        return undefined;
    }
};

export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
        toast.success('Data saved successfully.');
    } catch {
        toast.success('Failed to save data.');
        console.log('erro');
    }
};

export const saveData = () => {
    saveState({
        cargoBaysReducer: store.getState().cargoBaysReducer,
    });
};

export const getActive = () => {
    try {
        const isActiveFound = localStorage.getItem('active');
        if (isActiveFound === null) {
            return 0;
        } else {
            return JSON.parse(isActiveFound);
        }
    } catch {
        return 0;
    }
};

export const saveActive = (i: number) => {
    return localStorage.setItem('active', JSON.stringify(i));
};
