import * as types from "../Order/actiontype.order";

const initialState = {
  user: [],
  totalPrice: 0,
};

export const Orderreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ORDER_ADD: {
      return {
        ...state,
        user: [...state.user, payload],
        totalPrice: state.totalPrice + payload.price,
      };
    }

    case types.ORDER_INC: {
      for (let i = 0; i < state.user.length; i++) {
        if (payload == state.user[i].id) {
          state.user[i].count++;
        }
      }
      let price = 0;
      for (let i = 0; i < state.user.length; i++) {
        if (state.user[i].count) {
          price += state.user[i].price * state.user[i].count;
        } else {
          price += state.user[i].price;
        }
      }
      console.log("users", state.user);
      console.log(state.totalPrice);
      return {
        ...state,
        totalPrice: price,
      };
    }

    case types.ORDER_DEC: {
      for (let i = 0; i < state.user.length; i++) {
        if (payload == state.user[i].id) {
          if (state.user[i].count != 0) {
            state.user[i].count--;
          }
        }
      }
      let price = 0;
      for (let i = 0; i < state.user.length; i++) {
        if (state.user[i].count) {
          price += state.user[i].price * state.user[i].count;
        } else {
          price += state.user[i].price;
        }
      }
      console.log("users", state.user);
      console.log(state.totalPrice);
      return {
        ...state,
        totalPrice: price,
      };
    }

    case types.ORDER_CLEAR: {
      console.log("inside order_clear");
      return {
        ...state,
        user: initialState.user,
        totalPrice: initialState.totalPrice,
      };
    }

    default:
      return state;
  }
};
