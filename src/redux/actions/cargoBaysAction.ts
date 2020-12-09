import { GET_ALL_SHIPMENT } from '../actionTypes/cargoBaysTypes';
import { shipmentInterface, shipmentInterfaceType } from '../../interfaces/responseDataInterface/shipmentInterface';



export const getAllshipmentRes = (shipmentData: Array<shipmentInterfaceType>): shipmentInterface => {
    return {
        type: GET_ALL_SHIPMENT,
        payload: shipmentData,
    };
};
