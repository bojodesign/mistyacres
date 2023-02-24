import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import ProductModal from './ProductModal';

/**
 * @typedef {Object} Product
 *
 * @property {string} id
 * @property {string} title
 * @property {number} price
 * @property {number} bulkprice
 * @property {string[]} category
 * @property {string} image
 * @property {string} thumb
 */

/**
 * @param {{ product: Product }} props
 */
function ProductCard(props) { //props.product is the product we are selling
	const product = props.product;
	const cart = useContext(CartContext);
	const productQuantity = cart.getProductQuantity(product.id);

	const [quantityInput, setQuantityInput] = useState(1);

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
			</Card.Header>
			<Card.Body className="d-flex align-items-start text-start">
					<Card.Img src={product.thumb} onClick={handleShowImage} />
				<div className="ms-3 w-75">
					<Card.Text className="mb-2 text-black">{product.description}</Card.Text>
					<Card.Text className="text-black">{product.size}</Card.Text>
					<Card.Text className="text-black fw-bold mb-0">&#8804;99: ${product.price.toFixed(2)}</Card.Text>
					<Card.Text className="text-black fw-bold">&#8805;100: ${product.bulkprice.toFixed(2)}</Card.Text>
					
					{ productQuantity > 0 ? (
						<>
							<Form as={Row} className="mt-auto text-nowrap justify-content-start">
								<Col className="px-0">
									<Button 
									sm="4" 
									onClick={() => cart.addOneToCart(product.id)} 
									className="ms-2 bg-green text-black">
										<FontAwesomeIcon icon="fa-plus" />
									</Button>
									<Button 
									sm="4" 
									onClick={() => cart.removeOneFromCart(product.id)} className="ms-1 bg-green text-black">
										<FontAwesomeIcon icon="fa-minus" />
									</Button>
									<Button 
									sm="4" 
									variant="danger" 
									onClick={() => cart.deleteFromCart(product.id)} className="ms-2 text-nowrap bg-red">
										<FontAwesomeIcon icon="fa-x" />
									</Button>
									<div className="w-100 mb-2"></div>
									<div className="ps-2">
										<input className="quantity" value={productQuantity} type="number" onChange={(e) => {
												cart.setProductQuantity(
													product.id, 
													e.target.valueAsNumber
												);
											}} 
										/>
									</div>
									{/* <Form.Label column="true" className="text-black">In Quote: {productQuantity}</Form.Label> */}
								</Col>
							</Form>
						</>
					) : (
						<Row className="mt-auto justify-content-start">
							<Col sm="4" className="px-0">
								<Button 
								variant="primary" 
								onClick={() => cart.addToCart({ id: product.id, quantity: quantityInput })} 
								className="ms-2 me-0 bg-green text-black">
									<FontAwesomeIcon icon="fa-plus" />
								</Button>
							</Col>
							<div className="w-100 mb-2"></div>
							<Col className="ps-2">
								<input className="quantity" value={quantityInput} type="number" onChange={(e) => setQuantityInput(e.target.valueAsNumber)} />
							</Col>
						</Row>
					)}
				</div>
			</Card.Body>
		</Card>
		<Modal show={showImage} onHide={handleCloseImage}>
			<Modal.Header closeButton className="pb-0">
				<Modal.Title>
					<h4 className="mb-0">{product.title}</h4>
					<h5>{product.subtitle}</h5>
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