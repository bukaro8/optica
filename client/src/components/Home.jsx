import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../REDUX/actions';
import CardBase from './Card';
import Metadata from './Metadata';

const Home = () => {
	let products = useSelector((state) => state.products);

	let dispatch = useDispatch();
	useEffect(() => {
		if (!products.length) dispatch(getAllProducts());
	}, [dispatch]);
	return (
		<>
			<div>
				<Metadata title={'Muestra tu estilo'} />
				<h3 className='h1 text-bold text-center'>Ultimos Productos</h3>
				<section className=' mt-5'>
					<div className=' d-flex justify-content-around flex-wrap'>
						{products?.map((el) => (
							<CardBase
								key={el._id}
								id={el._id}
								title={el.name}
								price={el.price}
								image={el.images[0].url}
								description={el.description}
							/>
						))}
					</div>
				</section>
			</div>
		</>
	);
};

export default Home;
