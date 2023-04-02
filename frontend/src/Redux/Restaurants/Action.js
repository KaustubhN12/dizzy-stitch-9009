import axios from "axios";
import { GET_GIFT_CARD_REQUEST, GET_HEALTH_REQUEST, GET_PREMIUM_RESTAURANT_REQUEST, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./ActionType";

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

export const getPremiumRestaurant = (param) => (dispatch) => {
    dispatch(productRequst());
    axios.get("http://localhost:8080/restaurants",param).then((res)=>{
        dispatch(getPremiumRestaurantRequest(res.data));
    }).catch((err)=>{
        dispatch(productFailure());
    })
}

export const getGiftCards = (param) => (dispatch) => {
    dispatch(productRequst());
    axios.get("http://localhost:8080/giftcards",param).then((res)=>{
        dispatch(getGiftCardRequest(res.data));
    }).catch((err)=>{
        dispatch(productFailure());
    })
}

export const getHealth = (param) => (dispatch) => {
    dispatch(productRequst());
    axios.get("http://localhost:8080/health",param).then((res)=>{
        dispatch(getHealthRequest(res.data));
    }).catch((err)=>{
        dispatch(productFailure());
    })
}