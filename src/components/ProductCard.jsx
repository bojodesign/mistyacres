import { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import ProductModal from './ProductModal';

/**
 * @typedef {Object} Product
 *
 * @property {string} id
 * @property {string} title
 * @property {number} price
 * @property {string[]} category
 * @property {string} image
 * @property {string} thumb
 */

/**
 * @param {{ product: Product }} props
 */
function ProductCard(props) {
	const product = props.product;

	const [showImage, setShowImage] = useState(false);
	const handleCloseImage = () => setShowImage(false);
	const handleShowImage = () => setShowImage(true);

	// Render Product Cards
	return (
		<>
			<Card className="g-0 h-100">
				<Card.Header className="text-start">
					<Card.Title className="mb-0 text-secondary text-uppercase fw-bold">{product.title}</Card.Title>
					<Card.Subtitle className="mb-2 text-secondary text-uppercase fw-bold">{product.subtitle}</Card.Subtitle>
					<Card.Subtitle className="mb-2 text-measurement">{product.measure}</Card.Subtitle>
				</Card.Header>
				<Card.Body className="d-flex align-items-start text-start">
					<Card.Img src={product.thumb} onClick={handleShowImage} alt={`${product.title} / ${product.subtitle}`} />
					<div className="ms-3 w-75">
						<Card.Text className="mb-2 text-black">{product.description}</Card.Text>
						<Card.Text className="text-black">{product.size}</Card.Text>
						<Card.Text className="text-black fw-bold mb-0">{product.price !== undefined ? `$${product.price.toFixed(2)}` : ''}</Card.Text>
					</div>
				</Card.Body>
			</Card>
			<Modal show={showImage} onHide={handleCloseImage}>
				<Modal.Header closeButton className="pb-0">
					<Modal.Title>
						<h4 className="mb-0">{product.title}</h4>
						<h5>{product.subtitle}</h5>
						<h6>{product.measure}</h6>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="p-1">
					<ProductModal id={product.id}>
						<img src={product.image} alt={`${product.title} / ${product.subtitle}`} />
					</ProductModal>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default ProductCard;