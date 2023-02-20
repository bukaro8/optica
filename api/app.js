const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
//!middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
//!Import all routes
const products = require('./routes/product.js');
const users = require('./routes/user.js');
const order = require('./routes/order');

app.use('/api/v1', products);
app.use('/api/v1', users);
app.use('/api/v1', order);
module.exports = app;
