function ProductCard(props) {
	return (
		<div className="product-card">
			<img src="https://m.media-amazon.com/images/I/817xnvwK0PL._AC_UF1000,1000_QL80_.jpg" />
			<p>{props.name}</p>
			<span>{props.price}₺</span>
		</div>
	);
}

export default ProductCard;
