import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Metadata from '../Metadata';
import Sidebar from './Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../REDUX/actions';
const Dashboard = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);
	useEffect(() => {
		dispatch(getAllProducts());
	}, [products, dispatch]);
	return (
		<>
			<Metadata title='Dashboard' />
			<div className='row'>
				<h1 className='my-4'>Dashboard</h1>

				<div className='row pr-4'>
					<div className='col-xl-12 col-sm-12  mb-3'>
						<div className='card text-white bg-success  m-2 w-100  '>
							<div className='card-body'>
								<div className='text-center h5'>
									Products
									<br /> <b>{products?.length}</b>
								</div>
							</div>
							<Link
								className='card-footer text-white clearfix small z-1'
								to='/admin/products'
							>
								<span className='float-left'>View Details</span>
								<span className='float-right'>
									<i className='fa fa-angle-right'></i>
								</span>
							</Link>
						</div>
					</div>

					<div className='col-xl-12 col-sm-12  m-2 w-100 border '>
						<div className='card text-white bg-danger o-hidden h-100 w-100'>
							<div className='card-body'>
								<div className='text-center h5'>
									Out of Stock
									<br /> <b>{products?.filter((el) => el.stock < 1).length}</b>
								</div>
							</div>
							<Link
								className='card-footer text-white clearfix small z-1'
								to='/admin/products'
							>
								<span className='float-left'>View Details</span>
								<span className='float-right'>
									<i className='fa fa-angle-right'></i>
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
