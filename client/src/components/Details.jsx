import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts, showProductDetail } from '../REDUX/actions';
const Details = () => {
	const id = useParams();

	let details = useSelector((state) => state.productDetail);
	let products = useSelector((state) => state.products);

	let dispatch = useDispatch();
	useEffect(() => {
		if (!products.length) {
			dispatch(getAllProducts());
			dispatch(showProductDetail(id.id));
		}
	}, [dispatch]);
	const { name, price, description, images, category, stock } = details;
	const available = () => {
		return stock > 0 ? 'Disponible' : '5 dias';
	};
	return (
		<section className='container mt-5 '>
			<article className='row '>
				<div className=' col-7-lg '>
					<img
						src={images ? images[0].url : null}
						className='img-fluid'
						style={{ width: '100%', maxWidth: '40rem' }}
						alt={name}
					/>
				</div>
				<div
					className='col d-flex flex-column justify-content-around'
					style={{ textTransform: 'capitalize' }}
				>
					<h2 className='h1 '>{name}</h2>
					<div
						className='text-success d-flex flex-column  justify-content-around'
						style={{ height: '40%' }}
					>
						<div className='d-flex justify-content-around'>
							<div className='text-primary '> Marca: </div>
							<span>{category}</span>
						</div>
						<div className='d-flex justify-content-around'>
							<div className='text-primary'>Precio:</div>
							<span>${price}</span>
						</div>
						<div
							className='d-flex justify-content-around '
							style={{ width: '100%' }}
						>
							<div className='text-primary'>Inventario:</div>
							<span> {available()}</span>
						</div>
					</div>
				</div>
			</article>
			<div className=''>
				<div className='h2'>Descripcion</div>
				<p className='mb-5'>{description}</p>
			</div>
		</section>
	);
};

export default Details;
