import {createSlice} from "@reduxjs/toolkit";
import {ProductModel} from "../../models/responses/ProductModel";

interface CartItem {
	product: ProductModel;
	quantity: number;
}

// [ürün1,ürün2]
// [{ürün1,adet}, {ürün2,adet}]
const cartSlice = createSlice({
	name: "cart",
	initialState: {
		//cartItems:localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")!) : [],
		cartItems: (JSON.parse(localStorage.getItem("cart")!) || []) as CartItem[],
	},
	reducers: {
		addToCart: (state, action) => {
			let existingItem = state.cartItems.find(
				(i: CartItem) => i.product.id === action.payload.id,
			);

			if (existingItem) {
				// sepette bu üründen var
				existingItem.quantity++;
			} else {
				state.cartItems.push({product: action.payload, quantity: 1});
			}
			localStorage.setItem("cart", JSON.stringify(state.cartItems));
		},
		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter(
				(i: any) => i.id !== action.payload.id,
			);
			localStorage.setItem("cart", JSON.stringify(state.cartItems));
		},
		clearCart: state => {
			state.cartItems = [];
			localStorage.setItem("cart", JSON.stringify(state.cartItems));
		},
	},
});
export const cartReducer = cartSlice.reducer;
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
