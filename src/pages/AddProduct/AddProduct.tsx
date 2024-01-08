import {ErrorMessage, Field, Form, Formik} from "formik";
import {number, object, string} from "yup";
import FormikInput from "../../components/FormikInput/FormikInput";
import {passwordValidator} from "../../utils/customValidations";

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
			.max(50)
			.test(
				"my-custom-rule",
				"En az 1 büyük, 1 küçük harf ve 1 rakam içermelidir.",
				passwordValidator,
			),
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
					<FormikInput
						name="title"
						label="Ürün Adı"
						placeHolder="Ürün adı giriniz..."
					/>
					<FormikInput name="description" label="Ürün Açıklaması" />
					<FormikInput name="price" label="Ürün Fiyatı" type="number" />
					<FormikInput name="stock" label="Ürün Stok" />

					<Field as="select">
						<option>Opsiyon 1</option>
						<option>Opsiyon 2</option>
						<option>Opsiyon 3</option>
						<option>Opsiyon 4</option>
					</Field>

					<button type="submit" className="btn btn-primary">
						Kaydet
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default AddProduct;
