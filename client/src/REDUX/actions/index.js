import { back } from '../../back-end/back';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const PRODUCT_DETAIL = 'PRODUCT_DETAIL';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER_USER = 'REGISTER_USER';

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
export function userLogin(email, password) {
	return async (dispatch) => {
		const json = await back.post('/login', { email, password });
		return dispatch({
			type: LOGIN,
			payload: json.data,
		});
	};
}
export function logout() {
	return async (dispatch) => {
		const json = await back.get('/logout');
		return dispatch({
			type: LOGOUT,
			payload: json.data,
		});
	};
}
export function registerUser(userData) {
	const config = {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	};
	return async (dispatch) => {
		const { data } = await back.post('/register', userData, config);
		return dispatch({
			type: REGISTER_USER,
			payload: data.user,
		});
	};
}
