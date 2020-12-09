import { spinner } from './uiAction';
import { toast } from 'react-toastify';
import { Dispatch } from 'react';

export const handleError = (dispatch: Dispatch<any>, err: any) => {
    console.log(err);
    if (err.response) {
        dispatch(spinner(false));
        toast.warn(err.response.data.message);
    } else {
        dispatch(spinner(false));
        toast.error('Something Went Wrong!');
    }
};
