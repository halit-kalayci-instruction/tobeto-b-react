import {ErrorMessage, Field, Form, Formik} from "formik";
import {number, object, string} from "yup";

type Props = {};

const AddProduct = (props: Props) => {
	const initialValues = {
		title: "",
		description: "",
		price: 0,
		stock: 0,
	};

	const validationSchema = object({
		title: string()
			.required("Başlık alanı zorunludur.")
			.min(3, "Başlık alanı en az 3 karakter olmalıdır.")
			.max(50),
		description: string().required().min(5).max(300),
		price: number().required().min(0),
		stock: number().required().min(0).integer(),
	});

	return (
		<div className="container mt-5">
			<Formik
				initialValues={initialValues}
				onSubmit={values => {
					console.log(values);
				}}
				validationSchema={validationSchema}
			>
				<Form>
					<div className="mb-3">
						<label className="form-label">Ürün Adı</label>
						<Field name="title" type="text" className="form-control" />
						<ErrorMessage name="title">
							{message => <span className="text-danger">{message}</span>}
						</ErrorMessage>
					</div>
					<div className="mb-3">
						<label className="form-label">Ürün Açıklaması</label>
						<Field name="description" type="text" className="form-control" />
						<ErrorMessage name="description">
							{message => <span className="text-danger">{message}</span>}
						</ErrorMessage>
					</div>
					<div className="mb-3">
						<label className="form-label">Ürün Fiyatı</label>
						<Field name="price" type="number" className="form-control" />
						<ErrorMessage name="price">
							{message => <span className="text-danger">{message}</span>}
						</ErrorMessage>
					</div>
					<div className="mb-3">
						<label className="form-label">Ürün Stok</label>
						<Field name="stock" type="number" className="form-control" />
						<ErrorMessage name="stock">
							{message => <span className="text-danger">{message}</span>}
						</ErrorMessage>
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
