import React, { useState } from 'react';
import { registerUser } from '../../REDUX/actions';
import { useSelector, useDispatch } from 'react-redux';
const Register = () => {
	const dispatch = useDispatch();
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
	});
	return (
		<div className='container container-fluid d-flex justify-content-center'>
			<div className='row wrapper '>
				<div className=''>
					<form
						className='shadow-lg p-3 d-flex flex-column justify-content-center'
						encType='multipart/form-data'
					>
						<h1 className='mb-3'>Registo</h1>

						<div className='form-group'>
							<label htmlFor='email_field'>Nombre</label>
							<input
								type='name'
								id='name_field'
								className='form-control'
								value=''
							/>
						</div>

						<div className='form-group'>
							<label htmlFor='email_field'>Email</label>
							<input
								type='email'
								id='email_field'
								className='form-control'
								value=''
							/>
						</div>

						<div className='form-group '>
							<label htmlFor='password_field'>Password</label>
							<input
								type='password'
								id='password_field'
								className='form-control'
								value=''
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
