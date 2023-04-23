import axios from 'axios';

export const back = axios.create({
	baseURL: 'https://optica-lya.onrender.com/api/v1/',
});
