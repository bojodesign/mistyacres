import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { getProductData } from "../productsStore";

function CartProduct(props) {
	const cart = useContext(CartContext);
	const id = props.id;
	const quantity = props.quantity;
	const productData = getProductData(id);

	const priceString = '$' + (quantity * productData.price).toFixed(2);
	const discountPrice =
	  quantity >= 100 && productData.bulkprice
		? productData.bulkprice * quantity
		: null;

	return (
		<>
			<Row className="justify-content-start align-items-center flex-nowrap">
				<Col>{productData.title}</Col>
				<Col>{quantity}</Col>
				<Col>
				{discountPrice ? (
					<>
						<del>{priceString}</del><br />
						<ins>${discountPrice.toFixed(2)}</ins>
					</>
					) : (
					<span>{priceString}</span>
					)}
				</Col>
				<Col><Button size="sm" className="align-middle" onClick={() => cart.deleteFromCart(id)}><FontAwesomeIcon icon="fa-x" /></Button></Col>
			</Row>
			<hr className="mt-3" />
		</>
	);
}

export default CartProduct;