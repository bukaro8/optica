import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import Metadata from '../Metadata';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../REDUX/actions';
import Swal from 'sweetalert2';
import Dropzone from 'react-dropzone';
import { Container } from 'reactstrap';
import axios from 'axios';
import Loader from '../Loader';
const CreateProduct = ({ history }) => {
	const initialValues = {
		name: '',
		price: '',
		description: '',
		category: '',
		stock: '',
		images: [],
	};
	const [imagesIn, setImages] = useState([]);
	const [data, setData] = useState(initialValues);
	const [dataErrors, setDataErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const categories = [
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
	];
	const dispatch = useDispatch();
	const { success } = useSelector((state) => state.product);
	const [isSubmited, setIsSubmited] = useState(false);
	useEffect(() => {
		setData({ ...data, images: imagesIn });
		if (success) {
			// history.push('/admin/products');
		}
	}, [dispatch, dataErrors, imagesIn]);

	const handleOnChange = (e) => {
		e.preventDefault();
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setDataErrors(validate(data));
		setIsSubmited(true);

		if (typeof data.stock !== 'number' || typeof (data.price !== 'number')) {
			setData({
				...data,
				stock: parseInt(data.stock),
				price: parseInt(data.price),
			});
		}
		console.log(data);
		dispatch(createProduct(data));
		Swal.fire({
			title: 'Buen rabajo',
			text: 'Haz creado un nuevo articulo',
			icon: 'success',
			timer: 3000,
		});
		setData(initialValues);
		setImages([]);
	};

	const validate = (values) => {
		const errors = {};
		if (!data.name) {
			errors.name = 'Debes incluir un nombre para el articulo';
		}
		if (!data.price) {
			errors.price = 'Debes incluir un precio';
		}

		if (!data.description) {
			errors.description = 'Debes escribir una descripcion';
		}
		if (!data.category) {
			errors.category = 'Selecciona una Categoria';
		}
		if (data.category === '') {
			errors.category = 'Selecciona una Categoria';
		}
		if (!data.stock && data.stock !== 0) {
			errors.stock = 'Escribe la cantidad ';
		}

		if (data.stock < 0) {
			errors.stock = 'El stock debe ser mayor a -1';
		}
		if (data.images.length === 0) {
			errors.images = 'No has agregado imagenes';
		}
		return errors;
	};
	const handleDrop = (files) => {
		const uploaders = files?.map((file) => {
			const formData = new FormData();
			formData.append('file', file);
			formData.append('tags', 'codeinfuse,medium,gist');
			formData.append('upload_preset', 'products');
			formData.append('api_key', '736224911642424');
			formData.append('timestamp', (Date.now() / 1000) | 0);
			setLoading(true);
			return axios
				.post(
					'https://api.cloudinary.com/v1_1/dsek7f0ce/image/upload',
					formData
				)

				.then((res) => {
					const { data } = res;
					const pic = {
						public_id: data.public_id,
						url: data.secure_url,
					};
					setImages([...imagesIn, pic]);

					setData({ ...data, images: imagesIn });
				});
		});
		axios.all(uploaders).then(() => {
			setLoading(false);
		});
	};
	return (
		<div className='container '>
			<Metadata title='Nuevo Producto' />

			<form onSubmit={handleSubmit} className='d-flex justify-content-center'>
				<fieldset className='d-flex  flex-column col-lg-6 rounded mt-3 align-items-center bg-body shadow'>
					<legend className='h2 text-success mt-4'>Creacion de Producto</legend>
					{loading ? (
						<Loader />
					) : (
						<Container className='text-center mb-3 col-lg-8 border border-opacity-25 rounded border-success border-3'>
							<Dropzone
								onDrop={(e) => handleDrop(e)}
								onChange={(e) => setImages(e.target.value)}
								value={imagesIn}
							>
								{({ getRootProps, getInputProps }) => (
									<section>
										<div {...getRootProps({ className: 'dropzone' })}>
											<input {...getInputProps()} />
											<span>📂</span>
											<p>Coloca tus imagenes aqui</p>
											<p>Numero de Imagenes {imagesIn.length}</p>
										</div>
									</section>
								)}
							</Dropzone>
							{dataErrors?.images && (
								<p className='alert alert-danger'>{dataErrors.name}</p>
							)}
						</Container>
					)}
					<div className='mb-3 col-lg-8'>
						<input
							name='name'
							type='text'
							className='form-control'
							id='name'
							value={data.name}
							placeholder='Nombre'
							onChange={handleOnChange}
						/>
						{dataErrors?.name && (
							<p className='alert alert-danger'>{dataErrors.name}</p>
						)}
					</div>
					<div className='mb-3 col-lg-8'>
						<input
							name='price'
							type='number'
							className='form-control'
							id='price'
							placeholder='💰Precio💰'
							value={parseInt(data.price)}
							onChange={handleOnChange}
						/>
						{dataErrors?.price && (
							<p className='alert alert-danger'>{dataErrors.price}</p>
						)}
					</div>
					<div className='mb-3 col-lg-8'>
						<textarea
							name='description'
							className='form-control'
							id='description'
							placeholder='Descripcion'
							value={data.description}
							onChange={handleOnChange}
						/>
						{dataErrors?.description && (
							<p className='alert alert-danger'>{dataErrors.description}</p>
						)}
					</div>
					<div className='mb-3 col-lg-8'>
						<input
							name='stock'
							type='number'
							className='form-control'
							id='stock'
							placeholder='Inventario'
							value={data?.stock}
							onChange={handleOnChange}
							required
						/>
						{dataErrors?.stock && (
							<p className='alert alert-danger'>{dataErrors.stock}</p>
						)}
					</div>
					<div className='form-floating mb-3 col-lg-8'>
						<select
							value={data?.category}
							onChange={handleOnChange}
							className='form-select'
							name='category'
							id='category'
						>
							<option value=''>--</option>
							{categories.map((el) => (
								<option key={el} value={el}>
									{el}
								</option>
							))}
						</select>
						<label htmlFor='floatingSelect'>Selecciona la Marca</label>
						{dataErrors?.category && (
							<p className='alert alert-danger'>{dataErrors.category}</p>
						)}
					</div>

					{/* <div className='mb-3 col-lg-8'>
						<input
							name='imagesIn'
							type='file'
							className='form-control'
							id='imagesIn'
							placeholder='image'
						/>
						<img src={imagesIn[0]} alt='foto' />
					</div> */}
					<input
						type='submit'
						placeholder='Crear'
						className='btn btn-success mb-3'
					/>
				</fieldset>
			</form>
		</div>
	);
};

export default CreateProduct;
