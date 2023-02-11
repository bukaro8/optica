const Product = require('../models/product.js');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database.js');

dotenv.config({ path: 'api/config/config.env' });
connectDatabase();

const cleanDB = async () => {
	try {
		await Product.deleteMany();
		console.log('Los productos han sido borrados');
		process.exit();
	} catch (error) {
		console.log(error.message);
		process.exit();
	}
};
cleanDB();
