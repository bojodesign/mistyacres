import { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import useCartSummary from '../hooks/useCartSummary';
import { getItemPrice, getProductData } from '../productsStore';
import QuoteSummary from "./QuoteSummary";

export default function ContactForm() {
	const [status, setStatus] = useState('idle');
	const { items } = useContext(CartContext);
	const { costBeforeDiscount, productsCount, totalCost } = useCartSummary();

	const handleSubmit = (e) => {
		if (status === 'submitting') {
			return;
		}
		const formData = new FormData(e.target);

		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: formData,
		})
			.then((res) => {
				if (res.ok) {
					setStatus('submitted');
				} else {
					setStatus('error');
				}
			})
			.catch(() => setStatus('error'));

		e.preventDefault();
	};

	// Render Contact Form
	return (
		<form name="contact" onSubmit={handleSubmit} data-netlify="true" netlify-honeypot="bots-r-us">
			<input type="hidden" name="form-name" value="contact" />
			<input type="hidden" name="totalCost" value={totalCost} />
			<input type="hidden" name="productsCount" value={productsCount} />
			<input type="hidden" name="costBeforeDiscount" value={costBeforeDiscount} />
			{items.map((item) => (
				<input key={item.id} type="hidden" name="products[]" value={JSON.stringify({
					...item,
					title: getProductData(item.id).title,
					price: getItemPrice(item),
				})}
				/>
			))}
			<Row className="justify-content-center">
				{status === 'submitted' && (
					<button type='button' className="alert alert-dismissible contact-close" data-bs-dismiss='alert' aria-hidden='true'>
						<div className="animate__animated animate__fadeIn contact-success">We have received your message.
						</div>
					</button>
				)}
				{status === 'error' && (
					<button type='button' className="alert alert-dismissible contact-close" data-bs-dismiss='alert' aria-hidden='true'>
						<div className="animate__animated animate__fadeIn contact-failure">An error occurred.
						</div>
					</button>
				)}
				<Col lg={8} xl={7}>
					<div className="form-floating mb-3">
						<input type="hidden" name="form-name" value="contact" />
						<div className="form-floating mb-3 bots-r-us">
							<input type="text" className="form-control" placeholder="Do Not Fill" name="bots-r-us" />
							<label htmlFor="name" className="required">Do Not Fill</label>
						</div>
						<QuoteSummary />
						<div className="form-floating mb-3">
							<input type="text" className="form-control" placeholder="Your name" htmlFor="name" name="name" data-sb-validations="required" required />
							<label htmlFor="name" className="required">Your name</label>
							<div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
						</div>
						<div className="form-floating mb-3">
							<input type="email" className="form-control" placeholder="name@example.com" htmlFor="email" name="email" data-sb-validations="required,email" required />
							<label htmlFor="email" className="required">Email address</label>
							<div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
							<div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
						</div>
						<div className="form-floating mb-3">
							<input type="tel" className="form-control" placeholder="(123) 456-7890" htmlFor="phone" name="phone" />
							<label htmlFor="phone">Phone number</label>
							<div className="invalid-feedback">A phone number is required.</div>
						</div>
						<div className="form-floating mb-3">
							<textarea className="form-control message" placeholder="Enter your message here..." htmlFor="message" name="message" data-sb-validations="required" required></textarea>
							<label htmlFor="message" className="required">Message</label>
							<div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
						</div>
						<button disabled={status === 'submitting'} className="btn btn-primary btn-xl" id="submitButton" data-callback="onSubmit" data-action="submit">Send</button>
					</div>
				</Col>
			</Row>
		</form>
	);
}