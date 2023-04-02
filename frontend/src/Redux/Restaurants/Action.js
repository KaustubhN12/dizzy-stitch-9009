import axios from "axios";
import { GET_GIFT_CARD_REQUEST, GET_HEALTH_REQUEST, GET_PREMIUM_RESTAURANT_REQUEST, GET_SALON_REQUEST, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./ActionType";

export const productRequst = () => {
    return {type:PRODUCT_REQUEST}
}

export const productFailure = () => {
    return {type:PRODUCT_FAILURE}
}

export const getPremiumRestaurantRequest = (payload) => {
    return {type:GET_PREMIUM_RESTAURANT_REQUEST,payload}
}
export const getGiftCardRequest = (payload) => {
    return {type:GET_GIFT_CARD_REQUEST,payload}
}

export const getHealthRequest = (payload) => {
    return {type:GET_HEALTH_REQUEST,payload}
}

export const getSalonRequest = (payload) => {
    return {type:GET_SALON_REQUEST,payload}
}

export const getPremiumRestaurant = (param) => (dispatch) => {
    dispatch(productRequst());
    axios.get("https://good-puce-hummingbird-garb.cyclic.app/restaurant/get",param).then((res)=>{
        dispatch(getPremiumRestaurantRequest(res.data.msg));
    }).catch((err)=>{
        dispatch(productFailure());
    })
}

export const getGiftCards = (param) => (dispatch) => {
    dispatch(productRequst());
    axios.get("https://good-puce-hummingbird-garb.cyclic.app/gift/get",param).then((res)=>{
        dispatch(getGiftCardRequest(res.data.msg));
    }).catch((err)=>{
        dispatch(productFailure());
    })
}

export const getHealth = (param) => (dispatch) => {
    dispatch(productRequst());
    axios.get("https://good-puce-hummingbird-garb.cyclic.app/health/get",param).then((res)=>{
        dispatch(getHealthRequest(res.data.msg));
    }).catch((err)=>{
        dispatch(productFailure());
    })
}

export const getSalon = (param) => (dispatch) => {
    dispatch(productRequst());
    axios.get("https://good-puce-hummingbird-garb.cyclic.app/salon/get",param).then((res)=>{
        dispatch(getSalonRequest(res.data.msg));
    }).catch((err)=>{
        dispatch(productFailure());
    })
}