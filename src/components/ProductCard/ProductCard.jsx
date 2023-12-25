import {Link} from "react-router-dom";

function ProductCard(props) {
	console.log(props);
	return (
		<div class="card">
			<img
				src={props.product.thumbnail}
				class="card-img-top img-fluid"
				alt="..."
			/>
			<div class="card-body">
				<h5 class="card-title">{props.product.title}</h5>
				<p class="card-text">{props.product.description}</p>
				<Link to={"/products?id=" + props.product.id} class="btn btn-primary">
					Detail
				</Link>
				<button className="btn btn-danger">Sil</button>
			</div>
		</div>
	);
}

export default ProductCard;
