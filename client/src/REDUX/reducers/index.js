import {
	GET_PRODUCTS,
	PRODUCT_DETAIL,
	LOGIN,
	LOGOUT,
	REGISTER_USER,
	LOAD_USER,
	DELETE_PRODUCT,
	CREATE_PRODUCT,
} from '../actions';

const initialState = {
	products: [],
	productDetail: {},
	user: {},
	isAuthenticated: false,
	product: {},
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
				isAuthenticated: true,
				user: action.payload,
			};
		case LOAD_USER:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
			};
		case DELETE_PRODUCT:
			return {
				...state,
			};
		case CREATE_PRODUCT:
			return {
				...state,
				product: action.payload.product,
			};
		default:
			return state;
	}
}
export default rootReducer;
