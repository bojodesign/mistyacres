import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { Col, Container, Modal, Nav, Navbar, Row } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { ReactComponent as SiteLogo } from '../logo.svg';
import useScrollSpy from '../ScrollSpy';
import CartProduct from './CartProduct';

function NavComponent() {
	
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	
	const cart = useContext(CartContext);
	const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

	const totalCost = '$' + cart.getTotalCost().toFixed(2);
	const costBeforeDiscount = '$' + cart.getCostBeforeDiscount().toFixed(2);
	
	// Navbar shrink function
    const navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };
    // Shrink the navbar 
    navbarShrink();
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

	// Scrollspy
	const handleLinkClick = (event) => {
		// prevent the navigation / id adding to url
		event.preventDefault();
		const targetId = event.target.getAttribute('href');
		document.querySelector(targetId).scrollIntoView();
	  };
	
	  const activeId = useScrollSpy(['home', 'about', 'catalogue', 'contact'], 100);

	// Render Nav
	return (
		<>
		<Navbar expand="md" className="bg-secondary text-uppercase fixed-top justify-content-end" id="mainNav">
			<Container>
				<Navbar.Brand>
					<SiteLogo alt="Misty Acres" className="justify-content-center site-logo" href="#home" onClick={handleLinkClick} />
				</Navbar.Brand>
				<Nav as="ul" variant="pills" activeKey={activeId} className="justify-content-end align-items-center" id="navbarResponsive">
					<Nav.Item as="li" className="mx-2 mx-md-1">
						<Nav.Link eventKey="about" href="#about" onClick={handleLinkClick}>About</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li" className="mx-2 mx-md-1">
						<Nav.Link eventKey="catalogue" href="#catalogue" onClick={handleLinkClick}>Catalogue</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li" className="mx-2 mx-md-1">
						<Nav.Link eventKey="contact" href="#contact" onClick={handleLinkClick}>Contact</Nav.Link>
					</Nav.Item>
					<Nav.Item as="li" className="mx-2 mx-md-1 btn-quote">
						<Nav.Link className="bg-red" onClick={handleShow}><FontAwesomeIcon icon="fa-receipt" />&nbsp;({productsCount} items)</Nav.Link>
					</Nav.Item>
				</Nav>
			</Container>
		</Navbar>
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title><FontAwesomeIcon icon="fa-receipt" />&nbsp;Quote Summary</Modal.Title>
			</Modal.Header>
			<Modal.Body>
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

				<h5>Total: {costBeforeDiscount === totalCost ? (
                  <span>{totalCost}</span>
                ) : (
                  <>
                    <del>{costBeforeDiscount}</del>&nbsp;
                    <ins>{totalCost}</ins>
                  </>
                )}</h5>
			</>	
			:
				<h5 align="center">Quote is empty.</h5>
			}
			</Modal.Body>
		</Modal>
		</>
	)
}

export default NavComponent;