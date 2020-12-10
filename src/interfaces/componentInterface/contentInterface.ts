import { shipmentInterfaceType } from '../responseDataInterface/shipmentInterface';

export interface contentInterface {
    data: shipmentInterfaceType,
    isEmpty: boolean,
    notFound: boolean,
    shipmentData: null | Array<shipmentInterfaceType>
}