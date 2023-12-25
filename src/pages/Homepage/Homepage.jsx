import React, {useEffect} from "react";
import {Link} from "react-router-dom";

export default function Homepage() {
	const myAsyncFunction = () => {
		return new Promise((resolve, reject) => {
			// async işlem
			setTimeout(() => {
				//resolve("veri örneği"); // işlemin başarılı olması
				reject("istek başarısız"); // işlemin başarısız olması
			}, 3000);
		});
	};

	useEffect(() => {
		// fire and forget
		//thenCatchFinally();
		asyncAwait();
	}, []);

	// ES2017 => async, await

	// Vanilla Java, Vanilla C#, Vanilla Javascript

	const asyncAwait = async () => {
		try {
			let response = await myAsyncFunction();
			console.log(response);
		} catch (e) {
			console.log(e);
		}
	};

	const thenCatchFinally = () => {
		console.log("loading başladı");
		myAsyncFunction()
			.then(response => {
				console.log("Bir cevap geldi:", response);
			})
			.catch(err => {
				console.log("Bir hata geldi:", err);
			})
			.finally(() => {
				console.log("Async işlem sonlandı.");
				console.log("loading bitti");
			});
	};
	// JS ASYNC
	// Built-in Promise
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
