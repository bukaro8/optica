const Product = require('../models/product');

//? Create New Product=> /api/v1/product/new

const getProducts = async (req, res) => {
	const { name } = req.query;
	const { brand } = req.query;
	const products = await Product.find();
	let result;
	if (brand) {
		result = products.filter(
			(el) => el.category.toLocaleLowerCase() === brand.toLowerCase()
		);
		if (result.length > 0) {
			return res.status(200).send({ success: true, result });
		} else {
			return res.status(404).send({
				success: false,
				message: 'No se econtraron ningun articulo con esa marca',
			});
		}
	}
	if (name) {
		result = products.filter((el) =>
			el.name.toLowerCase().includes(name.toLowerCase())
		);
		result.length > 1
			? res.status(200).send({
					success: true,
					products: result,
			  })
			: res.status(404).send({
					success: false,
					message: 'No se encontro ningun producto con ese nombre',
			  });
	} else {
		res.status(200).send({
			success: true,
			products: products,
		});
	}
};

//?Get product by the ID
const getProductById = async (req, res) => {
	const { productId } = req.params;

	try {
		const result = await Product.findById(productId);
		if (result) {
			return res.status(200).send({
				success: true,
				product: result,
			});
		}
		res.status(404).send({
			success: false,
			message: 'No se encontro el producto',
		});
	} catch (error) {
		res.status(404).send({
			message: error.message,
		});
	}
};

//?Create a new product
const newProduct = async (req, res) => {
	req.body.user = req.user.id;
	const product = await Product.create(req.body);
	res.status(201).send({
		success: true,
		product,
	});
};

//?Update Product
const productUpdate = async (req, res) => {
	const { productId } = req.params;
	try {
		const updateProduct = await Product.findByIdAndUpdate(productId, req.body, {
			new: true,
			runValidators: true,
		});
		updateProduct
			? res.status(200).send({
					success: true,
					product: updateProduct,
			  })
			: res.status(404).send({
					success: false,
					message: 'No se encontro el producto',
			  });
	} catch (error) {
		res.status(404).send({ message: error.message });
	}
};
const deleteProduct = async (req, res) => {
	const { productId } = req.params;

	try {
		const product = await Product.findById(productId);
		if (product) {
			product.deleteOne();
			return res.status(200).send({
				success: true,
				message: 'Producto Borrado',
			});
		} else {
			return res.status(404).send({
				success: false,
				message: 'No se encontro el producto',
			});
		}
	} catch (error) {
		res.status(404).send({ message: error.message });
	}
};

module.exports = {
	getProducts,
	newProduct,
	getProductById,
	productUpdate,
	deleteProduct,
};
