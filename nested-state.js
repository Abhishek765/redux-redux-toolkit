import { legacy_createStore as createStore } from "redux";
import { produce } from "immer";

const initialState = {
  country: "India",
  address: {
    street: "123 Main Street",
    city: "Bangalore",
    state: "karnataka",
  },
};

const CHANGE_STREET = "CHANGE_STREET";

const changeStreet = (newStreet) => {
  return {
    type: CHANGE_STREET,
    payload: newStreet,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STREET:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial state: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state: ", store.getState());
});

store.dispatch(changeStreet("245 Main st."));

unsubscribe(store);
