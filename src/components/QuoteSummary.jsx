import React, { useContext, useState } from "react";
import { Col, Collapse, Row } from "react-bootstrap";
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';

function QuoteSummary() {

	const [open, setOpen] = useState(false);
	const cart = useContext(CartContext);
	const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

	return (
				<div className="form-floating mb-3 quote-summary">
					<div className="btn-light form-control quote-label" onClick={() => setOpen(!open)} aria-controls="quote" aria-expanded={open}>Quote Summary: {productsCount} items</div>
					<Collapse in={open}>
						<div className="px-3" htmlFor="quote" name="quote" id="quote">
						{productsCount > 0 ?
							<>
								<Row className="justify-content-start align-items-top flex-nowrap">
									<Col>Item</Col>
									<Col>Quantity</Col>
									<Col>Subtotal</Col>
									<Col>Remove</Col>
								</Row>
								<hr className="mt-0 border-secondary" />
								{cart.items.map((currentProduct, idx) =>(
									<CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
								))}

								<h5 className="pb-3">Total: ${cart.getTotalCost().toFixed(2)}</h5>
							</>	
							:
							<div></div>
							}
						</div>
					</Collapse>
				</div>
	)
}

export default QuoteSummary;