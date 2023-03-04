import { useContext } from 'react';
import { CartContext } from '../CartContext';

export default function useCartSummary() {
	const cart = useContext(CartContext);
	const totalCost = '$' + cart.getTotalCost().toFixed(2);
	const productsCount = cart.items.reduce(
		(sum, product) => sum + product.quantity,
		0
	);

	return {
		productsCount,
		totalCost,
	};
}
