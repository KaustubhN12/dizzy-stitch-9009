import axios from "axios";
import { GET_PREMIUM_RESTAURANT_REQUEST, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./ActionType";

export const productRequst = () => {
    return {type:PRODUCT_REQUEST}
}

export const productFailure = () => {
    return {type:PRODUCT_FAILURE}
}

export const getPremiumRestaurantRequest = (payload) => {
    return {type:GET_PREMIUM_RESTAURANT_REQUEST,payload}
}

export const getPremiumRestaurant = (dispatch) => {
    dispatch(productRequst());
    axios.get("http://localhost:8080/restaurants").then((res)=>{
        // console.log(res.data);
        dispatch(getPremiumRestaurantRequest(res.data));
    }).catch((err)=>{
        dispatch(productFailure());
    })
}