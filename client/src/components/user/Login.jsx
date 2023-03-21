import React, { useState, useEffect } from 'react';
import Loader from '../Loader';
import Metadata from '../Metadata';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogin } from '../../REDUX/actions';
const Login = ({ history }) => {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { isAuthenticated } = useSelector((state) => state.auth);
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(userLogin(email, password));
	};
	useEffect(() => {
		if (isAuthenticated) {
			history.push('/');
		}
		dispatch();
	}, [dispatch, isAuthenticated, history]);
	return (
		<>
			<Metadata title='Login' />
			<div className='row wrapper'>
				<div className='col-10 col-lg-5'>
					<form className='shadow-lg' onSubmit={submitHandler}>
						<h1 className='mb-3'>Login</h1>
						<div className='form-group'>
							<label for='email_field'>Email</label>
							<input
								type='email'
								id='email_field'
								className='form-control'
								value=''
							/>
						</div>

						<div className='form-group'>
							<label for='password_field'>Password</label>
							<input
								type='password'
								id='password_field'
								className='form-control'
								value=''
							/>
						</div>

						<a href='#' className='float-right mb-4'>
							Forgot Password?
						</a>

						<button
							id='login_button'
							type='submit'
							className='btn btn-block py-3'
						>
							LOGIN
						</button>

						<a href='#' className='float-right mt-3'>
							New User?
						</a>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
