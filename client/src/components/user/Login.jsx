import React, { useState, useEffect } from 'react';

import Metadata from '../Metadata';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogin } from '../../REDUX/actions';
import UploadWidget from '../UploadWidget';
const Login = ({ history }) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const isAuthenticated = useSelector((state) => state.isAuthenticated);
	const userAuth = useSelector((state) => state.user.role);
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(userLogin(email, password));
	};
	useEffect(() => {
		if (isAuthenticated && userAuth === 'admin') {
			history.push('/dashboard');
		}
	}, [dispatch, isAuthenticated, history]);
	return (
		<div
			style={{ minWidth: '12rem' }}
			className=' container container-fluid d-flex justify-content-center mt-4'
		>
			<Metadata title='Login' />
			<div className='row wrapper '>
				<div className='col-10 col-lg-12 border border-success-subtle shadow-lg rounded '>
					<form className='d-flex flex-column' onSubmit={submitHandler}>
						<h1 className='mb-3 text-success'>Admin Login</h1>
						<div className='form-group d-flex flex-column justify-content-center'>
							<label htmlFor='email_field'>Email</label>
							<input
								type='email'
								id='email_field'
								className='form-control'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div className='form-group'>
							<label htmlFor='password_field'>Password</label>
							<input
								type='password'
								id='password_field'
								className='form-control'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						{/* <Link to='/password/forgot' className='float-right mb-4'>
							Forgot Password?
						</Link> */}
						<button
							id='login_button'
							type='submit'
							className='btn btn-success  py-3 mb-3'
						>
							LOGIN
						</button>

						{/* <Link to='/register' className='float-right mt-3'>
							New User?
						</Link> */}
					</form>
					{/* <UploadWidget /> */}
				</div>
			</div>
		</div>
	);
};

export default Login;
