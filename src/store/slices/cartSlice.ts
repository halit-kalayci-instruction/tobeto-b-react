import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {cartItems: [] as any[]},
	reducers: {
		addToCart: (state, action) => {
			state.cartItems.push(action.payload);
		},
		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(i: any) => i.id !== action.payload.id,
			);
		},
		clearCart: state => {
			state.cartItems = [];
		},
	},
});
export const cartReducer = cartSlice.reducer;
