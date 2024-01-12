import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import ProductService from "../../services/ProductService";
import {ProductModel} from "../../models/responses/ProductModel";

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async (args, thunkAPI) => {
		const state: any = thunkAPI.getState();

		if (
			state.product.products.length > 0 &&
			!(new Date().getTime() - state.product.lastFetch > 60000)
		) {
			return state.product.products;
		}

		const service: ProductService = new ProductService();
		const response = await service.getAll();
		return response.data.products;
	},
);

const productSlice = createSlice({
	name: "product",
	initialState: {
		loading: "initial",
		products: [] as any[],
		lastFetch: new Date().getTime(),
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchProducts.pending, state => {
			state.loading = "loading";
		});
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.loading = "loaded";
			state.products = action.payload;
		});
		builder.addCase(fetchProducts.rejected, state => {
			state.loading = "error";
		});
	},
});

export const productReducer = productSlice.reducer;
export const {} = productSlice.actions;
