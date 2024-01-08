// action tanımı
export const addToCart = (product: any) => {
	// tanım
	// type => aksiyon adı
	// payload => eğer varsa aksiyon'un argümanları
	return {type: "ADD_TO_CART", payload: product};
};

export const removeFromCart = (product: any) => {
	return {type: "REMOVE_FROM_CART", payload: product};
};

export const clearCart = () => {
	return {type: "CLEAR_CART"};
};

// Redux-toolkit migration
// Redux-thunk araştırma
