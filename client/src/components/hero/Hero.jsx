import React from 'react';
import banner from '../../assets/images/hero.webp';
import { Link } from 'react-router-dom';
const Hero = () => {
	return (
		<div
			className='d-flex justify-content-center align-items-center'
			style={{
				backgroundImage: 'url(' + banner + ')',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				height: '20rem',
			}}
		>
			<div
				className='d-flex flex-column justify-content-around'
				style={{ height: '60%' }}
			>
				<h2 className='text-light fs-1 fw-bolder'>
					Encuentra Tu Marco Favorito
				</h2>
				<p className=' container-fluid text-light p-3 mb-2 rounded bg-success bg-opacity-25 text-emphasis-success'>
					Resalta tu estilo con nuestros elegantes marcos. Descubre nuestra
					amplia selección y encuentra el que mejor se adapte a ti.
				</p>
				<div className='d-flex  justify-content-around'>
					<button className='btn btn-success fw-bold'>
						<Link to='/products'>Ver Mas</Link>
					</button>
					{/* <button className='btn btn-secondary fw-bold'>Lentes de Sol </button> */}
				</div>
			</div>
		</div>
	);
};

export default Hero;
