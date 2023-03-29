import { GET_PREMIUM_RESTAURANT_REQUEST, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./ActionType"


const initialState = {
    isLoading:false,
    isError:false,
    premium_restaurant:[],
}

export const reducer = (state=initialState,{type,payload}) => {

    switch(type){
        case PRODUCT_REQUEST:
            return{
                ...state,isLoading:true
            }
        case PRODUCT_FAILURE:
            return {
                ...state,isError:true
            } 
        case GET_PREMIUM_RESTAURANT_REQUEST:
            return {
                ...state,isLoading:false,premium_restaurant:payload
            }              
        default:
            return state;
    }

}