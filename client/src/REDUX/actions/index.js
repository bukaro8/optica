import { back } from '../../back-end/back';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const PRODUCT_DETAIL = 'PRODUCT_DETAIL';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function getAllProducts() {
	return async function (dispatch) {
		const json = await back.get('/products');
		return dispatch({
			type: GET_PRODUCTS,
			payload: json.data.products,
		});
	};
}
export function showProductDetail(id) {
	return async function (dispatch) {
		const json = await back.get(`/product/${id}`);
		return dispatch({
			type: PRODUCT_DETAIL,
			payload: json.data.product,
		});
	};
}
export function userLogin({ email, password }) {
	return async (dispatch) => {
		const json = await back.get('/login', { email, password });
		return dispatch({
			type: LOGIN,
			payload: json.data,
		});
	};
}
