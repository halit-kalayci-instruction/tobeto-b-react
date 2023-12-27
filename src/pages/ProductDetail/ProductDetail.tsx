import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";

type Props = {};

const ProductDetail = (props: Props) => {
	const location = useLocation();
	useEffect(() => {
		let query = new URLSearchParams(location.search);
		console.log(query.get("id"));
	}, []);

	return <div>ProductDetail</div>;
};

export default ProductDetail;
// getbyid?id=1 query string  1. yol
// getById/1 path variable
