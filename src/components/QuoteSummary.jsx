import React, { useContext, useState } from "react";
import { Col, Collapse, Row } from "react-bootstrap";
import { CartContext } from '../CartContext';
import useCartSummary from "../hooks/useCartSummary";
import CartProduct from './CartProduct';

function QuoteSummary() {

	const [open, setOpen] = useState(false);
	const cart = useContext(CartContext);
	const { totalCost, productsCount } = useCartSummary();

	if (productsCount === 0) {
		return null;
	}

	return (
		<div className="form-floating mb-3 quote-summary">
			{productsCount >= 50 ? (
				<div>
					<div className="btn-light quote-label" onClick={() => setOpen(!open)} aria-controls="quote" aria-expanded={open}>Quote Summary: {productsCount} items</div>
					<Collapse in={open}>
						<div className="px-3" htmlFor="quote" name="quote" id="quote">
							<>
								<Row className="justify-content-start align-items-top flex-nowrap">
									<Col>Item</Col>
									<Col>Quantity</Col>
									<Col>Subtotal</Col>
									<Col>Remove</Col>
								</Row>
								<hr className="mt-0 border-secondary" />
								{cart.items.map((cartItem) => (
									<CartProduct key={cartItem.id} {...cartItem} />
								))}
								<h5 className="pb-3">
									{' '}
									<span>Total:&nbsp;{totalCost}</span>
								</h5>
							</>
						</div>
					</Collapse>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
}

export default QuoteSummary;