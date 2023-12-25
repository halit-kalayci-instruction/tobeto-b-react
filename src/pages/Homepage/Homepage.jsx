import React, {useEffect} from "react";
import {Link} from "react-router-dom";

export default function Homepage() {
	// http isteği

	useEffect(() => {
		// gelen veriyi json olarak console'a yazdır.
		fetch("https://dummyjson.com/products")
			.then(response => response.json())
			.catch(err => console.log(err));
	}, []);

	return (
		<div>
			Homepage
			<br />
			{/* SPA'larda href attribute'ı kullanımı yanlıştır. */}
			<a href="/products">Ürünler Sayfası</a>
			<br />
			<Link to={"/products"}>Ürünler Sayfası</Link>
		</div>
	);
}
