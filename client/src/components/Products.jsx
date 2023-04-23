import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../REDUX/actions';
import CardBase from './Card';
import Loader from './Loader';
import Metadata from './Metadata';

const Products = () => {
	let products = useSelector((state) => state.products);

	const [brand, setBrand] = useState('');
	let accum = [];
	const list = () =>
		products?.map((item) => {
			if (!accum.includes(item.category)) {
				accum.push(item.category);
				return (
					<option
						value={item.category}
						className='text-decoration-none '
						key={item._id}
						style={{ cursor: 'pointer' }}
					>
						{item.category}
					</option>
				);
			}
		});

	let dispatch = useDispatch();
	useEffect(() => {
		if (!products.length) dispatch(getAllProducts());
	}, [dispatch]);
	return (
		<>
			<div>
				<Metadata title={'Muestra tu Estilo'} />
				<div className='d-flex justify-content-center align-items-center flex-column border'>
					<h3 className='text-success'>Filtra por Marca</h3>
					<form className='dropdown navbar-nav d-flex justify-content-center border rounded '>
						<div className='nav-item dropdown text-center'>
							<label>Seleciona: </label>
							<select
								onChange={(e) => setBrand(e.target.value)}
								className='border border-0'
								name='brand'
								id='brand'
							>
								<option value=''>---</option>
								{list()}
							</select>
							{console.log(brand)}
						</div>
					</form>
				</div>

				<section className=' mt-5'>
					<div className=' d-flex justify-content-around flex-wrap'>
						{products.length === 0 ? (
							<Loader />
						) : !brand ? (
							products.map((el) => (
								<CardBase
									key={el._id}
									id={el._id}
									title={el.name}
									price={el.price}
									image={el.images[0].url}
									description={el.description}
								/>
							))
						) : (
							products
								.filter((el) => el.category === brand)
								.map((el) => (
									<CardBase
										key={el._id}
										id={el._id}
										title={el.name}
										price={el.price}
										image={el.images[0].url}
										description={el.description}
									/>
								))
						)}
					</div>
				</section>
			</div>
		</>
	);
};

export default Products;
