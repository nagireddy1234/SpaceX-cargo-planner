export type shipmentInterfaceType = {
    id: string;
    name: string;
    email: string;
    boxes: string;
}

export interface shipmentInterface {
    type: string,
    payload: Array<shipmentInterfaceType> | null
}