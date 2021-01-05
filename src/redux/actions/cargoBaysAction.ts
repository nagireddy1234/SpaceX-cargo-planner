import { GET_ALL_SHIPMENT } from '../actionTypes/cargoBaysTypes';
import { shipmentInterface, shipmentInterfaceType } from '../../interfaces/responseDataInterface/shipmentInterface';
import Axios from 'axios';
import { endpoints } from '../../utility/endpoints';
import { handleError } from './errorHandler';
import { Dispatch } from 'react';

export const getAllShipmentDataAPIcall = () => {
    return (dispatch: Dispatch<any>) => {
        Axios.get(endpoints.shipmentData)
            .then((res) => {
                dispatch(getAllshipmentRes(res.data))
            })
            .catch((err) => {
                handleError(dispatch, err);
            });
    };
};

export const getAllshipmentRes = (shipmentData: Array<shipmentInterfaceType>): shipmentInterface => {
    return {
        type: GET_ALL_SHIPMENT,
        payload: shipmentData,
    };
};
