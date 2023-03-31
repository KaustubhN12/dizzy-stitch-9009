import axios from "axios";
import * as types from "../Order/actiontype.order"

export const OrderRequiest = () => {
    return {
        type:types.ORDER_REQUEST
    }
}

export const OrderFailure = () => {
    return {type:types.ORDER_REQUEST}
}

const add_order=(payload)=>{
    return{
        type:types.ORDER_ADD,
        payload
    }
}

const inc_order=(payload)=>{
    return{
        type:types.ORDER_INC,
        payload
    }
}
const dec_order=(payload)=>{
    return{
        type:types.ORDER_DEC,
        payload
    }
}


// export const getPremiumRestaurantRequest = (payload) => {
//     return {type:GET_PREMIUM_RESTAURANT_REQUEST,payload}
// }



export const addorder_redux = (payload) =>async(dispatch)=> {

    dispatch(OrderRequiest());
    try{

        await dispatch(add_order(payload))
    }
    catch(error){
            dispatch(OrderFailure());

    }

}

export const orderdec_redux = (payload) =>async(dispatch)=> {

    dispatch(OrderRequiest());
    try{

        dispatch(dec_order(payload))
    }
    catch(error){
            dispatch(OrderFailure())

    }

}
export const orderinc_redux = (payload) =>async(dispatch)=> {

        dispatch(OrderRequiest())
    try{
        dispatch(inc_order(payload))
    }
    catch(error){
            dispatch(OrderFailure())
    }

}










