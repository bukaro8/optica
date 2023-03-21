import React from 'react';

const Loader = () => {
	return (
		<button
			className='btn btn-success'
			style={{ width: '8rem', height: '4rem' }}
			type='button'
			disabled
		>
			<span
				className='spinner-border spinner-border-sm '
				role='status'
				aria-hidden='true'
			></span>
			Cargando...
		</button>
	);
};

export default Loader;
