import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import './card.css';
import { Link } from 'react-router-dom';
import { showProductDetail } from '../REDUX/actions';
const CardBase = ({ title, image, description, price, id }) => {
	let dispatch = useDispatch();
	const handleOnClick = () => {
		dispatch(showProductDetail(id));
	};

	return (
		<Card className=' mb-3 mx-1 card'>
			<Link to={`/product/${id}`} onClick={handleOnClick}>
				<Card.Img variant='top' src={image} />
			</Link>
			<Card.Body>
				<Link
					onClick={handleOnClick}
					to={`/product/${id}`}
					className='text-success'
					style={{ textDecoration: 'none' }}
				>
					<h2
						className='h2 text-center '
						style={{ textTransform: 'capitalize' }}
					>
						{title}
					</h2>
				</Link>
				<Card.Text>{`${description.slice(0, 150)}...`}</Card.Text>
				<div className='mb-3'>{`$${price}`}</div>
				<Link to={`/product/${id}`} onClick={handleOnClick}>
					<div className='btn btn-success'>Ver mas</div>
				</Link>
			</Card.Body>
		</Card>
	);
};

export default CardBase;
