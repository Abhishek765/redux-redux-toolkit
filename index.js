// Creating  Cake shop example using redux

import { combineReducers, legacy_createStore as createStore } from "redux";

// initial state
const initialCakeState = {
  numberOfCakes: 10,
};

const initialIceCreamState = {
  numberOfIceCreams: 20,
};

// Actions Constants
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const ICE_CREAM_RESTOCKED = "ICE_CREAM_RESTOCKED";

// Actions Creators for Cake
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
  };
};

const restockCake = (payload = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload,
  };
};

// Actions Creators for Ice-cream
const orderIceCream = () => {
  return {
    type: ICE_CREAM_ORDERED,
  };
};

const resStockIceCream = (payload = 1) => {
  return {
    type: ICE_CREAM_RESTOCKED,
    payload,
  };
};

// Reducer Function
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICE_CREAM_ORDERED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };

    case ICE_CREAM_RESTOCKED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// Creating store
const store = createStore(rootReducer);
console.log(`Initial state:`, store.getState());

// subscribe to store
const unsubscribe = store.subscribe(() =>
  console.log(`updated state:`, store.getState())
);

// dispatch the actions for cake
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

store.dispatch(restockCake(3));

// dispatch the actions for IceCream
store.dispatch(orderIceCream());
store.dispatch(orderIceCream());
store.dispatch(orderIceCream());

store.dispatch(resStockIceCream(3));

// unsubscribe from store
unsubscribe(store);

store.dispatch(orderCake()); // here nothing will logged to console since we unsubscribe from store
