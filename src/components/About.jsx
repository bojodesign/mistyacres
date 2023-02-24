import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';

function About() {
	// Render About
	return (
		<section className="page-section bg-blue text-secondary mb-0" id="about">
				<Container>
					<h2 className="page-section-heading text-center text-uppercase text-secondary">About</h2>
					<div className="divider-custom">
						<div className="divider-custom-line"></div>
						<div className="divider-custom-icon">
						<FontAwesomeIcon icon="fa-seedling" />
						</div>
						<div className="divider-custom-line"></div>
					</div>
						<Row>
							<Col lg={{ span: 8, offset: 2 }}>
								<p className="lead">We are a native plant nursery located in the central plateau, Taupo region, growing for the revegetation market.</p>
							</Col>
							<Col lg={{ span: 8, offset: 2 }}>
								<p className="lead">We will select your order from our nursery and dispatch it to you.</p>
							</Col>
							<Col lg={{ span: 8, offset: 2 }}>
								<p className="lead">Our plants are grown predominantly in 14cm pots (1.4L) or larger. This gives a decent root ball and plant height.</p>
							</Col>
							<Col lg={{ span: 8, offset: 2 }}>
								<p className="lead">A substantial root ball is necessary to aid moisture storage for the plant, that is required for rural, large scale plantings where the plants are often left a little to their own device.</p>
							</Col>
							<Col lg={{ span: 8, offset: 2 }}>
								<p className="lead">The plant height when planted is also important to get above weeds or grass growth and help to ward off rabbit and hare attack.</p>
							</Col>
						</Row>
				</Container>
		</section>
	);
}

export default About;