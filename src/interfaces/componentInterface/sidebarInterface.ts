import { shipmentInterfaceType } from '../responseDataInterface/shipmentInterface';

export interface sidebarInterface {
    data: Array<shipmentInterfaceType>,
    onClick: (i: number)=>void,
    active: number
}