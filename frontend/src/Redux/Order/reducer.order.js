

import * as types from "../Order/actiontype.order"



const initialState = {
    
    user:[{
        title:String,
        price:Number
    }]
}

export const Orderreducer = (state=initialState,{type,payload}) => {
    console.log(payload)
    // console.log("reducer",state.user)
    switch(type){
        case types.ORDER_ADD:
            return{
                ...state,
                user:[...state.user,payload]
            }
        case types.ORDER_INC:

        const id=payload.id

        const new_user=state.user.map((el)=>{
            if(el.id==id){
               el.price= el.price+payload.price
            }
        })
        console.log("new_user",new_user)

            return {
                ...state,
                user:{...state.user,new_user}
            } 
        case types.ORDER_DEC:
            return {
                ...state,
                user:state.user.filter((el)=>{
                    if(el.title==payload.title){
                        el.price=el.price-payload.price
                    }
                })
            }              
        default:
            return state;
    }

}