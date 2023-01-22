import { TOGGLE_BRAND } from "../actionTypes/actionTypes";
import { TOGGLE_STOCK } from './../actionTypes/actionTypes';

export const toggleBrand = (brandName)=>{
    return {
        type: TOGGLE_BRAND,
        payload: brandName,
    }
}
export const toggleStock = (brandName)=>{
    return {
        type: TOGGLE_STOCK,
    }
}