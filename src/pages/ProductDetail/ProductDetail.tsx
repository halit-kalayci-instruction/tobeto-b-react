import axios from "axios";
import React, {useEffect} from "react";
import {useLocation, useParams} from "react-router-dom";
import {ProductModel} from "../../models/responses/ProductModel";
import ProductService from "../../services/ProductService";

type Props = {};

const ProductDetail = (props: Props) => {
	// const location = useLocation();
	// useEffect(() => {
	// 	let query = new URLSearchParams(location.search);
	// 	console.log(query.get("id"));
	// }, []);
	const params = useParams<{id: string}>();
	useEffect(() => {
		if (params.id) {
			// eğer bu değişken var ise
			// detay sayfasına istek at..
			fetchDetails(params.id);
		}
	}, []);

	const fetchDetails = async (id: string) => {
		let service: ProductService = new ProductService();
		let response = await service.getById(parseInt(id));
		console.log(response);
	};

	return <div>ProductDetail</div>;
};

export default ProductDetail;
// getbyid?id=1 query string  1. yol
// getById/1 path variable 2. yol
