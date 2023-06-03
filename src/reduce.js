const reduce = (state, action) => {
  if (action.type === "LOADING") {
    const tempList = action.payload.map((item) => {
      return { ...item, cartState: false, counter: 1, totalAmount: item.price };
    });

    return { ...state, filterList: tempList, data: tempList };
  }
  if (action.type === "ADD_TO_CART") {
    console.log("add to cart");

    const newFilterList = state.filterList.map((item) =>
      item.id === action.payload ? { ...item, cartState: true } : item
    );

    const newCartItem = state.data.find((item) => item.id === action.payload);

    const newCart = [...state.cart, newCartItem];

    console.log(newCart);
    return {
      ...state,
      filterList: newFilterList,
      data: newFilterList,
      cartCounter: state.cartCounter + 1,
      cart: newCart,
      alertMsg: "product add to cart",
      alertClass: "show-alert",
      total: state.total + newCartItem.price,
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
    const quickShowProduct = state.data.find(
      (item) => item.id === action.payload
    );
    return {
      ...state,
      quickShowProduct: quickShowProduct,
      showModalProduct: true,
    };
  }
  if (action.type === "FILTER_LIST") {
    if (action.payload === "all") {
      return { ...state, filterList: state.data };
    } else {
      const newList = state.data.filter(
        (item) => item.category === action.payload
      );
      console.log(state.filterList);
      return { ...state, filterList: newList };
    }
  }
  if (action.type === "INCREASE") {
    let price;
    const tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        price = item.price;
        return {
          ...item,
          counter: item.counter + 1,
          totalAmount: (item.counter + 1) * item.price,
        };
      }
      return item;
    });

    return {
      ...state,
      cart: tempCart,
      cartCounter: state.cartCounter + 1,
      total: state.total + price,
    };
  }
  if (action.type === "DECREASE") {
    let tempList;
    let price;
    const tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          price = item.price;
          tempList = state.filterList.map((item) => {
            if (item.id === action.payload && item.counter === 1) {
              return { ...item, cartState: false };
            }
            return item;
          });
          return {
            ...item,
            counter: item.counter - 1,
            totalAmount: item.totalAmount - item.price,
          };
        }
        return item;
      })
      .filter((item) => item.counter !== 0);

    return {
      ...state,
      filterList: tempList,
      cart: tempCart,
      cartCounter: state.cartCounter - 1,
      total: state.total - price,
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, showModalProduct: false };
  }
  if (action.type === "REMOVE_ITEM") {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    const removedItem = state.cart.find((item) => item.id === action.payload);
    const tempList = state.filterList.map((item) => {
      if (item.id === action.payload) {
        return { ...item, cartState: false };
      }
      return item;
    });
    return {
      ...state,
      cart: tempCart,
      cartCounter: state.cartCounter - removedItem.counter,
      filterList: tempList,
      alertMsg: "product remove from cart",
      alertClass: "show-alert",
      isAlertShow: true,
      total: state.total - removedItem.totalAmount,
    };
  }

  return state;
};
export { reduce };
