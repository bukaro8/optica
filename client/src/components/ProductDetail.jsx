import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showProductDetail } from '../REDUX/actions';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import { Carousel } from 'react-bootstrap';
import Metadata from './Metadata';
const ProductDetail = () => {
	const available = () => {
		return stock > 0 ? 'Disponible Ahora!' : 'Disponible en 5 dias';
	};
	let dispatch = useDispatch();
	const id = useParams();
	let product = useSelector((state) => state.productDetail);
	const { name, price, description, images, category, stock } = product;
	useEffect(() => {
		dispatch(showProductDetail(id.id));
	}, [dispatch, id.id]);
	return (
		<div className='row f-flex justify-content-around'>
			<Metadata title={name} />
			{!product._id ? (
				<Loader />
			) : (
				<>
					<div className='col-12 col-lg-5 img-fluid mt-5' id='product_image'>
						<Carousel pause='hover'>
							{images?.map((img) => (
								<Carousel.Item key={img.public_id}>
									<img
										className='d-block w-100'
										src={img.url}
										alt={product.title}
									/>
								</Carousel.Item>
							))}
						</Carousel>
						{/* <img
							src={images ? images[0].url : null}
							className='img-fluid mt-5'
							alt={name}
						/> */}
					</div>

					<div className='col-12 col-lg-5 mt-5'>
						<h3
							className='h1 text-success'
							style={{ textTransform: 'capitalize' }}
						>
							{name}
						</h3>
						<p className='text-secondary fw-lighter fst-italic'>
							id: {product._id}
						</p>

						<p className='h2'>${price}</p>

						<p>
							Status:{' '}
							<span className='text-success fw-bolder'>{available()}</span>
						</p>
						<p className='text-primary '> Marca: {category} </p>

						<h4 className='mt-2 container'>Descripcion:</h4>
						<p>{description}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default ProductDetail;
