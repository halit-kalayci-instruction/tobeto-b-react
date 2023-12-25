import React, {useEffect, useState} from "react";
import axios from "axios";
export default function Products() {
	// verileri çek
	// maple
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axiosGet();
	}, []);

	const axiosGet = async () => {
		let response = await axios.get("https://dummyjson.com/products");
		setProducts(response.data.products);
		console.log(response.data.products);
	};

	// responsive?
	return (
		<div className="container mt-5">
			<div className="row">
				{products.map(product => (
					<div className="col-3 mb-3">
						<div class="card">
							<img src="..." class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<a href="#" class="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
