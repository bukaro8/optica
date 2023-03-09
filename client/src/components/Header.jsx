import React, { useEffect } from 'react';
import logo from '../assets/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../REDUX/actions';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Header = () => {
	let products = useSelector((state) => state.allProducts);

	let dispatch = useDispatch();
	useEffect(() => {
		if (!products.length) dispatch(getAllProducts());
	}, [dispatch]);
	return (
		<>
			<nav className='navbar navbar-expand-lg bg-body-tertiary bg-success'>
				<div className='container'>
					<Link to='#' className='navbar-brand' href='#'>
						<img src={logo} alt='logo' width='50' height='60' />
					</Link>
					<button
						className='navbar-toggler border-light '
						data-bs-theme='dark'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<i className='bi bi-list text-light'></i>
					</button>
					<div
						className='collapse navbar-collapse justify-content-end'
						id='navbarNavAltMarkup'
					>
						<div className='navbar-nav d-flex  align-items-center'>
							<a
								className='nav-link fw-bolder text-light'
								aria-current='page'
								href='#'
							>
								Inicio
							</a>
							<a className='nav-link fw-bolder text-light' href='#'>
								Productos
							</a>
							<a className='nav-link  text-light' href='#'>
								<i className='bi bi-cart-check-fill fs-4'></i>
							</a>

							<a className='nav-link  text-light' href='#'>
								<i className='bi bi-person fs-4'></i>
							</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
