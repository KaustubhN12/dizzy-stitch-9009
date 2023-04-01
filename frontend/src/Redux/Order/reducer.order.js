import * as types from "../Order/actiontype.order";

const initialState = {
  user: []
};

export const Orderreducer = (state = initialState, { type, payload }) => {
//   console.log(payload)

  // console.log("reducer",state.user)
  switch (type) {
    case types.ORDER_ADD:
      return {
        ...state,
        user: [...state.user, payload],
      };
    case types.ORDER_INC: {
      const Id = payload.id;
      const user = state.user.find((el) => el.id === Id);
      const updateduser = { ...user, price: user.price + payload.price };
      const updatedusers = state.user.map((t) =>
        t.id === Id ? updateduser : t
      );
      return { ...state, user: updatedusers };
    }

    case types.ORDER_DEC:
      return {
        ...state,
        user: state.user.filter((el) => {
          if (el.title == payload.title) {
            el.price = el.price - payload.price;
          }
        }),
      };
    default:
      return state;
  }
};
