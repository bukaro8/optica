import { back } from '../../back-end/back';

export const GET_PRODUCTS = 'GET_PRODUCTS';

export function getAllProducts() {
	return async function (dispatch) {
		const json = await back.get('/products');
		return dispatch({
			type: GET_PRODUCTS,
			payload: json.data.products,
		});
	};
}
