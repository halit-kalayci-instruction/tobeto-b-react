import {Form, Formik} from "formik";
import React from "react";

type Props = {};

const AddProduct = (props: Props) => {
	const initialValues = {
		title: "",
		description: "",
		price: 0,
		stock: 0,
	};

	return (
		<div className="container mt-5">
			<Formik
				initialValues={initialValues}
				onSubmit={values => {
					console.log(values);
				}}
			>
				<Form>
					<div className="mb-3">
						<label className="form-label">Ürün Adı</label>
						<input type="text" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Ürün Açıklaması</label>
						<input type="text" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Ürün Fiyatı</label>
						<input type="text" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Ürün Stok</label>
						<input type="text" className="form-control" />
					</div>
					<button type="submit" className="btn btn-primary">
						Kaydet
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default AddProduct;
