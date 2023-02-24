import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from './ContactForm';

function Contact() {
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
						<div name="quote"></div>
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