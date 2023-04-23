import { back } from '../../back-end/back';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const PRODUCT_DETAIL = 'PRODUCT_DETAIL';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER_USER = 'REGISTER_USER';
export const LOAD_USER = 'LOAD_USER';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';

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
export function deleteProduct(id) {
	return async function (dispatch) {
		const json = await back.delete(`admin/product/${id}`);
		return dispatch({
			type: PRODUCT_DETAIL,
			payload: json.data.message,
		});
	};
}
export function createProduct(productData){
	return async function (dispatch) {
		try {
			const {data}=await back.post(`/admin/product/new`,productData)
			return dispatch({
				type: CREATE_PRODUCT,
				payload:data
			})
		} catch (error) {
			
		}
	}
}
// export function editProduct(id, name, price, description, stock) {
// 	return async function (dispatch) {
// 		try {
// 			const { data } = await back.put(`admin/product/${id}`, {
// 				name,
// 				price,
// 				description,
// 				stock,
// 			});

// 			return dispatch({
// 				type: PRODUCT_DETAIL,
// 				payload: data.data.message,
// 			});
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// }

export function userLogin(email, password) {
	return async (dispatch) => {
		try {
			const { data } = await back.post('/login', { email, password });
			return dispatch({
				type: LOGIN,
				payload: data.user,
			});
		} catch (error) {
			console.log(error);
		}
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
export function registerUser(name, email, password) {
	return async (dispatch) => {
		try {
			const json = await back.post('/register', { name, password, email });
			return dispatch({
				type: REGISTER_USER,
				payload: json.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
export function loadUser() {
	return async (dispatch) => {
		const json = await back.get('/me');
		return dispatch({
			type: LOAD_USER,
			payload: json.data.user,
		});
	};
}
