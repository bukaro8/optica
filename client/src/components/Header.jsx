import React, { useEffect } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { logout } from '../REDUX/actions';
import Sidebar from './admin/Sidebar';
const Header = () => {
	const dispatch = useDispatch();
	const userAuth = useSelector((state) => state.user.role);
	const isAuthenticated = useSelector((state) => state.isAuthenticated);
	const handleCLick = () => {
		dispatch(logout());
	};
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
							{isAuthenticated ? (
								<div
									style={{ cursor: 'pointer' }}
									onClick={handleCLick}
									to='/logout'
									className='nav-link fw-bolder text-light d-flex align-items-center'
								>
									Salir <i className='bi bi-box-arrow-right fs-4'></i>
								</div>
							) : (
								<Link to='/login' className='nav-link  text-light' href='#'>
									<i className='bi bi-person fs-4'></i>
								</Link>
							)}
						</div>
						{userAuth === 'admin' ? <Sidebar /> : <span></span>}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
