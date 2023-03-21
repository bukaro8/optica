import { GET_PRODUCTS, PRODUCT_DETAIL, LOGIN, LOGOUT } from '../actions';

const initialState = {
	products: [],
	productDetail: {},
	user: {},
};
function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};
		case PRODUCT_DETAIL:
			return {
				...state,
				productDetail: action.payload,
			};
		case LOGIN:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
			};
		default:
			return state;
	}
}
export default rootReducer;
