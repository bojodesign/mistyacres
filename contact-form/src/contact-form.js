import React from "react";

const encode = (data) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", phone: "", message: "", success: false, failure: false };
	}

	handleSubmit = (e) => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...this.state })
		})
			.then(() =>
				this.setState({
					name: "",
					email: "",
					phone: "",
					message: "",
					success: true,
					failure: false
				})
			)
			.catch((error) => this.setState({ success: false, failure: true }));

		e.preventDefault();
	};

	handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { name, email, phone, message, success, failure } = this.state;
		return (
			<form name="contact" onSubmit={this.handleSubmit} data-netlify="true" netlify-honeypot="bots-r-us">
				<div className="row justify-content-center">
					{success && <button type='button' className="alert alert-dismissible contact-close" data-bs-dismiss='alert' aria-hidden='true'>
						<div className="animate__animated animate__fadeIn contact-success">We have received your message.
						</div>
					</button>}
					{failure && <button type='button' className="alert alert-dismissible contact-close" data-bs-dismiss='alert' aria-hidden='true'>
						<div className="animate__animated animate__fadeIn contact-failure">An error occurred.
						</div>
					</button>}
					<div className="col-lg-8 col-xl-7">
						<div className="form-floating mb-3">
							<input type="hidden" name="form-name" value="contact" />
							<div className="form-floating mb-3 bots-r-us">
								<input type="text" className="form-control" placeholder="Do Not Fill" name="bots-r-us" />
								<label for="name" className="required">Do Not Fill</label>
							</div>
							<div className="form-floating mb-3">
								<input type="text" className="form-control" placeholder="Your name" htmlFor="name" name="name" value={name} onChange={this.handleChange} data-sb-validations="required" required />
								<label for="name" className="required">Your name</label>
								<div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
							</div>
							<div className="form-floating mb-3">
								<input type="email" className="form-control" placeholder="name@example.com" htmlFor="email" name="email" value={email} onChange={this.handleChange} data-sb-validations="required,email" required />
								<label for="email" className="required">Email address</label>
								<div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
								<div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
							</div>
							<div className="form-floating mb-3">
								<input type="tel" className="form-control" placeholder="(123) 456-7890" htmlFor="phone" name="phone" value={phone} onChange={this.handleChange} />
								<label for="phone">Phone number</label>
								<div class="invalid-feedback">A phone number is required.</div>
							</div>
							<div className="form-floating mb-3">
								<textarea className="form-control message" placeholder="Enter your message here..." htmlFor="message" name="message" value={message} onChange={this.handleChange} data-sb-validations="required" required></textarea>
								<label for="message" className="required">Message</label>
								<div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
							</div>
							<button className="btn btn-primary btn-xl" id="submitButton" data-callback="onSubmit" data-action="submit">Send</button>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

export default ContactForm;
