import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import useCartSummary from '../hooks/useCartSummary';
import { getItemPrice, getProductData } from '../productsStore';
import ContactForm from './ContactForm';

function Contact() {
	const { items } = useContext(CartContext);
	const { costBeforeDiscount, productsCount, totalCost } = useCartSummary();

	// Render Contact
	return (
		<section className="page-section bg-blue" id="contact">
			<Container>
				<h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Us</h2>
				<div className="divider-custom">
					<div className="divider-custom-line"></div>
					<div className="divider-custom-icon">
						<FontAwesomeIcon icon="fa-seedling" />
					</div>
					<div className="divider-custom-line"></div>
				</div>
				<form name="contact" data-netlify="true" netlify-honeypot="bots-r-us" hidden>
					<input type="text" name="bots-r-us" />
					<input type="text" name="form-name" value="contact" />
					<input type="number" name="totalCost" value={totalCost} />
					<input type="number" name="productsCount" value={productsCount} />
					<input type="number" name="costBeforeDiscount" value={costBeforeDiscount} />
					{items.map((item) => (
						<input key={item.id} type="hidden" name="products[]" value={JSON.stringify({
							...item,
							title: getProductData(item.id).title,
							price: getItemPrice(item),
						})}
						/>
					))}
					<input type="text" name="name" />
					<input type="email" name="email" />
					<input type="tel" name="phone" />
					<textarea name="message"></textarea>
				</form>
				<ContactForm></ContactForm>
			</Container>
		</section>
	);
}

export default Contact;