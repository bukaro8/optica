import React, { useEffect, useState } from 'react';
import { registerUser, userLogin } from '../../REDUX/actions';
import { useSelector, useDispatch } from 'react-redux';
const Register = ({ history }) => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.isAuthenticated);
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		avatar: {},
	});
	useEffect(() => {
		isAuthenticated && history.push('/');
	}, [isAuthenticated]);
	const handleOnClick = (e) => {
		e.preventDefault();
		dispatch(registerUser(user.name, user.email, user.password));
		setTimeout(() => {
			dispatch(userLogin(user.email, user.password));
		}, 1000);
	};

	return (
		<div className='container container-fluid d-flex justify-content-center'>
			<div className='row wrapper '>
				<div className=''>
					<form
						className='shadow-lg p-3 d-flex flex-column justify-content-center'
						encType='multipart/form-data'
					>
						<h1 className='mb-3'>Registro</h1>

						<div className='form-group'>
							<label htmlFor='email_field'>Nombre</label>
							<input
								type='text'
								id='name_field'
								className='form-control'
								onChange={(e) => setUser({ ...user, name: e.target.value })}
								value={user.name}
								required
							/>
						</div>

						<div className='form-group'>
							<label htmlFor='email_field'>Email</label>
							<input
								type='email'
								className='form-control'
								onChange={(e) => setUser({ ...user, email: e.target.value })}
								value={user.email}
								required
							/>
						</div>

						<div className='form-group '>
							<label htmlFor='password_field'>Password</label>
							<input
								type='password'
								id='password_field'
								className='form-control'
								onChange={(e) => setUser({ ...user, password: e.target.value })}
								value={user.password}
								required
							/>
						</div>

						<div className='form-group '>
							<label htmlFor='avatar_upload'>Imagen</label>
							<div className='d-flex align-items-center flex-wrap'>
								<div>
									<figure className='avatar mr-3 item-rtl'>
										<img src='' className='rounded-circle' alt='image' />
									</figure>
								</div>
								<div className='custom-file'>
									<input
										type='file'
										name='avatar'
										className='custom-file-input'
										id='customFile'
									/>
									<label className='custom-file-label' htmlFor='customFile'>
										Choose Avatar
									</label>
								</div>
							</div>
						</div>

						<button
							id='register_button'
							type='submit'
							className='btn btn-success py-3'
							onClick={handleOnClick}
						>
							REGISTER
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
