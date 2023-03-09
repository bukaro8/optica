import axios from 'axios';

export const back = axios.create({
	baseURL: 'http://localhost:3001/api/v1/',
});
