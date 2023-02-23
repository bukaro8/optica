import React from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Header = () => {
	return (
		<>
			<nav class='navbar navbar-expand-lg bg-body-tertiary bg-success'>
				<div class='container'>
					<Link to='#' className='navbar-brand' href='#'>
						<img src={logo} alt='logo' width='50' height='60' />
					</Link>
					<button
						class='navbar-toggler border-light '
						data-bs-theme='dark'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<i class='bi bi-list text-light'></i>
					</button>
					<div
						class='collapse navbar-collapse justify-content-end'
						id='navbarNavAltMarkup'
					>
						<div class='navbar-nav d-flex  align-items-center'>
							<a
								class='nav-link fw-bolder text-light'
								aria-current='page'
								href='#'
							>
								Inicio
							</a>
							<a class='nav-link fw-bolder text-light' href='#'>
								Productos
							</a>
							<a class='nav-link  text-light' href='#'>
								<i class='bi bi-cart-check-fill fs-4'></i>
							</a>

							<a class='nav-link  text-light' href='#'>
								<i class='bi bi-person fs-4'></i>
							</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
