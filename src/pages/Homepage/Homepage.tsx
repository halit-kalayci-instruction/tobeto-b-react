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

	// 1- Birden fazla noktada kullanılabilir
	// 2- Sorumluluğun UI dosyası üzerinden kalkması
	// 3- Ortak bi noktadan yönetebilmek için
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

// Formik-Yup CUMA!
// Global State Management (Redux-Context API)
// Interceptors
// toastr, loader
