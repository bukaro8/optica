import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary bg-light bg-gradient rounded col-lg-4'>
			<ul className='h5 list-unstyled  components d-flex container collapse navbar-collapse justify-content-around text-reset align-items-center'>
				<li className='me-3'>
					<Link
						style={{ textDecoration: 'none', color: '#2A8754' }}
						to='/dashboard'
					>
						<i className='bi bi-speedometer'></i>
						Dashboard
					</Link>
				</li>

				<li className='nav-item dropdown'>
					<a
						style={{ textDecoration: 'none', color: '#2A8754' }}
						className='nav-link dropdown-toggle'
						href='#ProductSubmenu'
						role='button'
						data-bs-toggle='dropdown'
						aria-expanded='false'
					>
						<i className='bi bi-eyeglasses'></i>Products
					</a>
					<ul className='dropdown-menu'>
						<li>
							<Link
								style={{ textDecoration: 'none', color: '#2A8754' }}
								className='dropdown-item'
								to='/admin/products'
							>
								All
							</Link>
						</li>
						<li>
							<Link
								style={{ textDecoration: 'none', color: '#2A8754' }}
								className='dropdown-item'
								to='/admin/product/create'
							>
								Create New
							</Link>
						</li>
					</ul>
				</li>
				{/* <li className='nav-item dropdown'>
					<a
						style={{ textDecoration: 'none', color: '#2A8754' }}
						href='#productSubmenu'
						data-toggle='collapse'
						aria-expanded='false'
						className='nav-link dropdown-toggle'
					>
						<i className='bi bi-eyeglasses'></i>Products
					</a>
					<ul className='dropdown-menu'>
						<li className='dropdown-item'>
							<Link
								className='dropdown-item'
								style={{ textDecoration: 'none', color: '#2A8754' }}
								to='/admin/products'
							>
								<i className='fa fa-clipboard-list'></i> All
							</Link>
						</li>

						<li className='dropdown-item'>
							<Link
								className='dropdown-item'
								style={{ textDecoration: 'none', color: '#2A8754' }}
								to='/admin/product'
							>
								<i className='fa fa-plus'></i> Create
							</Link>
						</li>
					</ul>
				</li> */}
			</ul>
		</nav>
	);
};

export default Sidebar;
