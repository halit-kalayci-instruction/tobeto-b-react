import {ProductModel} from "./ProductModel";

export interface GetAllProductsModel {
	total: number;
	skip: number;
	limit: number;
	products: ProductModel[];
}
