import React, { useEffect, useRef, useState } from 'react';

const UploadWidget = () => {
	const cloudinaryRef = useRef();
	const widgetRef = useRef();
	const [img, setImg] = useState(
		'https://cdn.onlinewebfonts.com/svg/img_184513.png'
	);
	useEffect(() => {
		cloudinaryRef.current = window.cloudinary;
		widgetRef.current = cloudinaryRef.current.createUploadWidget(
			{
				cloudName: 'dsek7f0ce',
				uploadPreset: 'uploadCloud',
			},
			function (error, result) {
				if (result.event === 'success') {
					setImg(result.info.secure_url);
				}
			}
		);
	}, []);
	return (
		<div>
			<img src={img} className='img-fluid' alt='avatar' />
			<button onClick={() => widgetRef.current.open()}>Cargar Imagen</button>
		</div>
	);
};

export default UploadWidget;
