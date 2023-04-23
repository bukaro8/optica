const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Por favor ingrese el nombre del producto'],
		trim: true,
		maxLength: [
			150,
			'El nombre del producto debe ser inferior a 150 caracteres',
		],
	},
	price: {
		type: Number,
		required: [8, 'La cantidad no puede ser superior a 99.999.999 '],
		default: 0,
	},
	description: {
		type: String,
		required: [true, 'Por favor ingrese una descripcion del producto'],
	},
	ratings: {
		type: Number,
		default: 0,
	},
	images: [
		{
			public_id: {
				type: String,
				required: true,
			},
			url: {
				type: String,
				required: true,
			},
		},
	],
	category: {
		type: String,
		required: [true, 'Seleccione una categoria '],
		enum: {
			values: [
				'Ray-Ban',
				'Oakley',
				'Carolina Herrera',
				'Montblanc',
				'Cartier',
				'Dita',
				'Chanel',
				'Carrera',
				'Infinity',
				'Vintage',
				'Visionary',
				'Misión',
				'Fresh',
				'American',
				'Splith',
				'Dkent',
				'Pike',
				'Techno',
				'Viva',
				'Fresh Look',
				'Fair',
			],
			message: 'Por favor seleccione una categoria  ',
		},
	},
	stock: {
		type: Number,
		required: [true, 'Introduzca el stock'],
		maxLength: [2, 'No puede ser superior a 99'],
		default: 0,
	},
	numOfReviews: {
		type: Number,
		default: 0,
	},
	reviews: [
		{
			name: {
				type: String,
				required: true,
			},
			rating: {
				type: Number,
				require: true,
			},
			comment: {
				type: String,
				required: true,
			},
		},
	],

	createdAt: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model('Product', productSchema);
