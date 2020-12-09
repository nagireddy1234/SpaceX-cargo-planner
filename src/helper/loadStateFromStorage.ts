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
        toast.success("Failed to  load data. ");
        return undefined;
    }
};

export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
        toast.success("Data saved successfully.");
    } catch {
        // ignore write errors
        toast.success("Failed to save data.");
        console.log('erro');
    }
};

export const saveData = () => {
    saveState({
        cargoBaysReducer: store.getState().cargoBaysReducer,
    });
};
