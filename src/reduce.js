const reduce = (state, action) => {
  if (action.type === "LOADING") {
    console.log(action.payload);
    return { ...state, filterList: action.payload, data: action.payload };
  }
  if (action.type === "ADD_TO_CART") {
    console.log("add to cart");
    const newCartItem = state.data.filter((item) => item.id === action.payload);
    const newCart = [...state.cart, ...newCartItem];

    return {
      ...state,

      cartCounter: state.cartCounter + 1,
      cart: newCart,
      alertMsg: "product add to cart",
      alertClass: "show-alert",
    };
  }
  if (action.type === "ADD_TO_WISHLIST") {
    console.log("add to wishlist");
    const singleWishItem = state.data.filter(
      (item) => item.id === action.payload
    );
    const newWishList = [...state.wishlistItems, ...singleWishItem];

    return {
      ...state,
      wishlistCounter: state.wishlistCounter + 1,
      wishlistItems: newWishList,
      alertMsg: "product add to wishlist",
      alertClass: "show-alert",
    };
  }
  if (action.type === "QUICK_CHECK") {
    return state;
  }
  if (action.type === "FILTER_LIST") {
    if (action.payload === "all") {
      return { ...state, filterList: state.data };
    } else {
      const newList = state.data.filter(
        (item) => item.category === action.payload
      );
      return { ...state, filterList: newList };
    }
  }
  return state;
};
export { reduce };
