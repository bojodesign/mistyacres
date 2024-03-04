import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from './ProductCard';

function Store() {
	const [filter, setFilter] = useState('small');

	const filteredProducts = productsArray.filter((product) =>
		product.category.includes(filter)
	);

	// Render Store
	return (
		<>
			<section className="page-section bg-purple text-white portfolio" id="catalogue">
				<Container>
					<h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Catalogue</h2>
					<div className="divider-custom">
						<div className="divider-custom-line"></div>
						<div className="divider-custom-icon">
							<FontAwesomeIcon icon="fa-seedling" />
						</div>
						<div className="divider-custom-line"></div>
					</div>
					<Row className="text-secondary mb-4">
						<Col className="text-center">
							<div className="lead">Please request the plants you would like to order via the contact form.</div>
							<div className="lead">We will get back to you shortly with availability, a final quote and delivery cost.</div>
							<div className="lead">Small plants are a minimum order of 30. Prices are GST exclusive.</div>
						</Col>
					</Row>
					<div className="d-flex justify-content-center">
						<div className="tabs">
							<Button
								className="mx-2 btn btn-primary bg-red fw-bold"
								id="small"
								aria-label="Available"
								active={filter === 'small'}
								onClick={() => setFilter("small")}>Small</Button>
							<Button
								className="mx-2 btn btn-primary bg-red fw-bold"
								id="large"
								aria-label="Unavailable"
								active={filter === 'large'}
								onClick={() => setFilter("large")}>Large</Button>
						</div>
					</div>
					<Row xs={1} md={2} className="g-1 card-background">
						{filteredProducts.map((product) => (
							<Col align="center" key={`product.${product.id}`}>
								<ProductCard product={product} />
							</Col>
						))}
					</Row>
				</Container>
			</section>
		</>
	);
}

export default Store;