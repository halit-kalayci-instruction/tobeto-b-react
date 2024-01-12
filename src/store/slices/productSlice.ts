import {createSlice} from "@reduxjs/toolkit";
import ProductService from "../../services/ProductService";

const productSlice = createSlice({
	name: "product",
	initialState: {loading: "initial", products: [] as any[]},
	reducers: {
		getAll: state => {
			let service: ProductService = new ProductService();
			state.loading = "loading";
			service.getAll().then(response => {
				state.loading = "loaded";
				state.products = response.data.products;
			});
		},
	},
});

export const productReducer = productSlice.reducer;
export const {getAll} = productSlice.actions;
