import * as types from "../Order/actiontype.order";

const initialState = {
  user: [],
  totalPrice:0
};

export const Orderreducer = (state = initialState, { type, payload }) => {
//   console.log(payload)

  // console.log("reducer",state.user)
  switch (type) {
    case types.ORDER_ADD:{
      return {
        ...state,
        user: [...state.user, payload],totalPrice:state.totalPrice+payload.price
      };
    }
    case types.ORDER_INC: {
      // const Id = payload.id;
      // const user = state.user.find((el) => el.id === Id);
      // const updateduser = { ...user, price: user.price + payload.price };
      // const updatedusers = state.user.map((t) =>
      //   t.id === Id ? updateduser : t
      // );
      // return { ...state, user: updatedusers };
      
      for(let i=0;i<state.user.length;i++){
        if(payload==state.user[i].id){
            state.user[i].count++;
        }
      }
      let price=0;
      for(let i=0;i<state.user.length;i++){
        if(state.user[i].count){
          price+=state.user[i].price*state.user[i].count
        }else{
          price+=state.user[i].price
        }
        
      }
      console.log("users",state.user);
      console.log(state.totalPrice)
      return{
       ...state,totalPrice:price
      }
    }

    case types.ORDER_DEC:{
     
      for(let i=0;i<state.user.length;i++){
        if(payload==state.user[i].id){
          if(state.user[i].count!=0){
            state.user[i].count--;
          }
        }
      }
      let price=0;
      for(let i=0;i<state.user.length;i++){
        if(state.user[i].count){
          price+=state.user[i].price*state.user[i].count
        }else{
          price+=state.user[i].price
        }
        
      }
      console.log("users",state.user);
      console.log(state.totalPrice)
      return {
        ...state,totalPrice:price
      };
    }
    default:
      return state;
  }
};
