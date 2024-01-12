import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./slices/cartSlice";
import {productReducer} from "./slices/productSlice";

const rootReducer = combineReducers({
	cart: cartReducer,
	product: productReducer,
});

export const store = configureStore({reducer: rootReducer});
