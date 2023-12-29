import {Field, Form, Formik} from "formik";
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
						<Field name="title" type="text" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Ürün Açıklaması</label>
						<Field name="description" type="text" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Ürün Fiyatı</label>
						<Field name="price" type="number" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Ürün Stok</label>
						<Field name="stock" type="number" className="form-control" />
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
