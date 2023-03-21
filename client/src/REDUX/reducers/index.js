import {
	GET_PRODUCTS,
	PRODUCT_DETAIL,
	LOGIN,
	LOGOUT,
	REGISTER_USER,
} from '../actions';

const initialState = {
	products: [],
	productDetail: {},
	user: {},
	isAuthenticated: false,
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
		case LOGOUT:
			return {
				...state,
				isAuthenticated: false,
			};
		case REGISTER_USER:
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
}
export default rootReducer;
