export const initialState = {
  basket: [],
  user: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };
    case "REMOVE_FROM_BASKET":
      const newBasket = [...state.basket];
      const findEle = state.basket.find(product => product.id === action.payload.id);
      const findIndex = newBasket.indexOf(findEle);
      if (findIndex !== -1) {
        newBasket.splice(findIndex, 1);
      }
      return { ...state, basket: newBasket}
    default:
      return state;
  }
}

export default reducer;
