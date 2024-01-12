import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import ProductService from "../../services/ProductService";

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async () => {
		const service: ProductService = new ProductService();
		const response = await service.getAll();
		return response.data.products;
	},
);

const productSlice = createSlice({
	name: "product",
	initialState: {loading: "initial", products: [] as any[]},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchProducts.pending, state => {
			console.log("İstek atılıyo..");
			state.loading = "loading";
		});
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			console.log("Cevap geldi..", action);
			state.loading = "loaded";
			state.products = action.payload;
		});
		builder.addCase(fetchProducts.rejected, state => {
			console.log("Hata geldi..");
			state.loading = "error";
		});
	},
});

export const productReducer = productSlice.reducer;
export const {} = productSlice.actions;
