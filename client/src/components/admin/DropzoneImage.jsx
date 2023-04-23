import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Dropzone from 'react-dropzone';

const DropzoneImage = () => {
	const [images, setImages] = useState([]);
	return (
		<div>
			<Container>
				<Dropzone
					className='dropzone'
					onChange={(e) => setImages(e.target.value)}
					value={images}
				/>
				{({ getRootProps, getInputProps }) => (
					<section>
						<div {...getRootProps({ className: 'dropzone' })}>
							<input {...getInputProps()} />
							<span>📂</span>
							<p>Coloca tus imagenes aqui</p>
						</div>
					</section>
				)}
			</Container>
		</div>
	);
};

export default DropzoneImage;
