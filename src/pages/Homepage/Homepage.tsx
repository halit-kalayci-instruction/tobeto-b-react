import axios from "axios";
import {useEffect, useState} from "react";
import {GetAllProductsModel} from "../../models/responses/GetAllProductsModel";
import {ProductModel} from "../../models/responses/ProductModel";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductService from "../../services/ProductService";

type Props = {};

const Homepage = (props: Props) => {
	const [products, setProducts] = useState<ProductModel[]>([]);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = () => {
		let service: ProductService = new ProductService();
		service.getAll().then(response => {
			setProducts(response.data.products);
		});
	};

	return (
		<div className="container">
			<div className="row">
				{products.map(product => (
					<div key={product.id} className="col-3">
						<ProductCard product={product} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Homepage;
