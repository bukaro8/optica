import React from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Header = () => {
	return (
		<>
			<nav className='navbar navbar-expand-lg bg-body-tertiary bg-success'>
				<div className='container'>
					<Link to='/' className='navbar-brand'>
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
							<Link
								to={'/'}
								className='nav-link fw-bolder text-light'
								aria-current='page'
							>
								Inicio
							</Link>
							<Link to={'/products'} className='nav-link fw-bolder text-light'>
								Productos
							</Link>
							{/* <Link to={'/cart'} className='nav-link  text-light' href='#'>
								<i className='bi bi-cart-check-fill fs-4'></i>
							</Link> */}

							<Link to={'/user'} className='nav-link  text-light' href='#'>
								<i className='bi bi-person fs-4'></i>
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
