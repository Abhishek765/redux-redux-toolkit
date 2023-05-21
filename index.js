// Creating  Cake shop example using redux

import { legacy_createStore as createStore } from "redux";

// initial state
const initialState = {
  numberOfCakes: 10,
};

// Actions Constants
const CAKE_ORDERED = "CAKE_ORDERED";

// Actions Creators
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
  };
};

// Reducer Function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      return state;
  }
};

// Creating store
const store = createStore(reducer);
console.log(`Initial state:`, store.getState());

// subscribe to store
const unsubscribe = store.subscribe(() =>
  console.log(`updated state:`, store.getState())
);

// dispatch the actions
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

// unsubscribe from store
unsubscribe(store);

store.dispatch(orderCake()); // here nothing will logged to console since we unsubscribe from store
