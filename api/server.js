const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database.js');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
//*Setting up config file
dotenv.config({ path: 'api/config/config.env' });

//!setting up cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

//*Connecting to DB
connectDatabase();

app.listen(process.env.PORT, () => {
	console.log(
		`Server started on PORT :${process.env.PORT} in ${process.env.NODE_ENV} mode`
	);
});
