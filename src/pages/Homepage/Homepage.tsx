import axios from "axios";
import {useEffect} from "react";
import {GetAllProductsModel} from "../../models/responses/GetAllProductsModel";

type Props = {};

const Homepage = (props: Props) => {
	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = () => {
		//axios
		axios
			.get<GetAllProductsModel>("https://dummyjson.com/products")
			.then(response => {
				console.log(response.data.limit);
			});
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-3"></div>
			</div>
		</div>
	);
};

export default Homepage;
