import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
});

export default store;
