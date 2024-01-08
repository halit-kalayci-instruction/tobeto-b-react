const initialState = {
	cartItems: [],
};

// state => deponun o anki durumu
// action => tetiklenen aksiyon bilgileri
export const cartReducer = (state: any = initialState, action: any) => {
	switch (action.type) {
		case "ADD_TO_CART":
			// State is immutable.
			//state.cartItems.push(action.payload);

			// aynı ürün varsa quantity artsın, yoksa eklensin bla bla..
			return {
				...state,
				cartItems: [...state.cartItems, action.payload],
			};
		case "REMOVE_FROM_CART":
			return {
				...state,
				cartItems: state.cartItems.filter(
					(i: any) => i.id !== action.payload.id,
				),
			};
		case "CLEAR_CART":
			return {...state, cartItems: []};
		default:
			return state;
	}
};
// State history..
// Hata yönetimi
