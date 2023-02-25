import React, { useContext, useState } from "react";
import { Col, Collapse, Row } from "react-bootstrap";
import { CartContext } from '../CartContext';
import useCartSummary from "../hooks/useCartSummary";
import CartProduct from './CartProduct';

function QuoteSummary() {

	const [open, setOpen] = useState(false);
	const cart = useContext(CartContext);
	const { totalCost, costBeforeDiscount, productsCount } = useCartSummary();

	if (productsCount === 0) {
		return null;
	}

	return (
		<div className="form-floating mb-3 quote-summary">
			<div className="btn-light form-control quote-label" onClick={() => setOpen(!open)} aria-controls="quote" aria-expanded={open}>Quote Summary: {productsCount} items</div>
			<Collapse in={open}>
				<div className="px-3" htmlFor="quote" name="quote" id="quote">
					{productsCount > 0 ? (
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
								Total:&nbsp;
								{costBeforeDiscount === totalCost ? (
									<span>{totalCost}</span>
								) : (
									<>
										<del>{costBeforeDiscount}</del>&nbsp;
										<ins>{totalCost}</ins>
									</>
								)}
							</h5>
						</>
					) : (
						<div></div>
					)}
				</div>
			</Collapse>
		</div>
	);
}

export default QuoteSummary;