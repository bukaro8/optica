import React from 'react';

const NotFoundPage = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
			}}
		>
			<h1
				style={{
					fontSize: '5rem',
					fontWeight: 'bold',
					marginBottom: '16px',

					textShadow: '2px 2px #f44369',
					textAlign: 'center',
				}}
			>
				Only Admins🥴
			</h1>

			<img
				src='https://media.tenor.com/IHdlTRsmcS4AAAAC/404.gif'
				alt='Gato confundido'
				style={{
					maxWidth: '100vw',
				}}
			/>
		</div>
	);
};

export default NotFoundPage;
