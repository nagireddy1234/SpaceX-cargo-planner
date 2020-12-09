import { LOADER } from '../actionTypes/uiTypes'

export const spinner = (value: boolean)=> {
    return {
        type: LOADER,
        payload: value
    }
}