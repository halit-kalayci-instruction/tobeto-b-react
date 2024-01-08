import {Link} from "react-router-dom";
import {ProductModel} from "../../models/responses/ProductModel";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/actions/cartActions";

type Props = {
	product: ProductModel;
	title?: string;
};

// ? => Bir alanı nullable yapar
// ! => Nullable alan içerisinden veri okurken null değilse kontrolü yapar.
const ProductCard = (props: Props) => {
	const dispatch = useDispatch();

	const addProductToCard = () => {
		dispatch(addToCart(props.product));
	};

	return (
		<div className="card">
			<img
				src={props.product.thumbnail}
				className="card-img-top img-fluid"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.product.title}</h5>
				<p className="card-text">{props.product.description}</p>
				<Link
					to={"/product-detail/" + props.product.id}
					className="btn btn-primary"
				>
					Detail
				</Link>
				<button onClick={addProductToCard} className="btn btn-secondary">
					Sepete Ekle
				</button>
				<button className="btn btn-danger">Sil</button>
			</div>
		</div>
	);
};

export default ProductCard;
