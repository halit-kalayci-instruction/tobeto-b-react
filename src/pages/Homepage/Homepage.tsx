import axios from "axios";
import {useEffect, useState} from "react";
import {GetAllProductsModel} from "../../models/responses/GetAllProductsModel";
import {ProductModel} from "../../models/responses/ProductModel";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductService from "../../services/ProductService";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../store/slices/productSlice";

type Props = {};

const Homepage = (props: Props) => {
	// const [products, setProducts] = useState<ProductModel[]>([]);

	// useEffect(() => {
	// 	fetchProducts();
	// }, []);

	// // 1- Birden fazla noktada kullanılabilir
	// // 2- Sorumluluğun UI dosyası üzerinden kalkması
	// // 3- Ortak bi noktadan yönetebilmek için
	// const fetchProducts = () => {
	// 	let service: ProductService = new ProductService();
	// 	service.getAll().then(response => {
	// 		setProducts(response.data.products);
	// 	});
	// };

	const productsState = useSelector((state: any) => state.product);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProducts() as any);
	}, []);
	return (
		<div className="container">
			<div className="row">
				{productsState.products.map((product: any) => (
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
