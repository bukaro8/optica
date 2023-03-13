import Card from 'react-bootstrap/Card';
import './card.css';
import { Link } from 'react-router-dom';
const CardBase = ({ title, image, description, price, id }) => {
	return (
		<Card className=' mb-3 mx-1 card'>
			<Link to={`/product/${id}`}>
				<Card.Img variant='top' src={image} />
			</Link>
			<Card.Body>
				<Link
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
				<Link to={`/product/${id}`}>
					<div className='btn btn-success'>Ver mas</div>
				</Link>
			</Card.Body>
		</Card>
	);
};

export default CardBase;
