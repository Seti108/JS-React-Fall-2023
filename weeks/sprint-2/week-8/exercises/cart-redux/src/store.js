// create your store here
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";

const reducer = combineReducers({
  cart: cartReducer,
});

export const store = configureStore({
  reducer,
});
