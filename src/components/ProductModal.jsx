import { Row } from "react-bootstrap";
import { getProductData } from "../productsStore";

function ProductModal(props) {
	const id = props.id;
	const productData = getProductData(id);
	
	return (
		<>
			<Row className="justify-content-center">
				<img className="img-fluid rounded mb-1" src={productData.image} alt={`${productData.title} / ${productData.subtitle}`} />
			</Row>
		</>
	)
}

export default ProductModal;