import { createContext, useState } from "react";
import { getProductData, productsArray } from "./productsStore";

export const CartContext = createContext ({
	items: [],
	getProductQuantity: () => {},
	addToCart: () => {},
	addOneToCart: () => {},
	removeOneFromCart: () => {},
	deleteFromCart: () => {},
	getCostBeforeDiscount: () => {},
	getTotalCost: () => {},
	getProductImage: () => {},
	setProductQuantity: () => {},
});

/**
 * @typedef {Object} CartProduct
 * @property {string} id
 * @property {number} quantity
 */

export function CartProvider({ children }) {
	// ignore the @type comment below, it's to help with intellisense

	/** @type {[CartProduct[], React.Dispatch<SetStateAction<CartProduct[]>]} */
	const [cartProducts, setCartProducts] = useState([]);

	const getProductQuantity = (id) =>  {
		const quantity = cartProducts.find(
			(product) => product.id === id
			)?.quantity;

		if (quantity === undefined) {
			return 0;
		}

		return quantity;
	};

	const addToCart = (cartProduct) => {
		const { id, quantity } = cartProduct;
		setCartProducts((products) => {
			const copy = [...products];
			const foundProduct = copy.find((p) => p.id === id);
			if (foundProduct) {
				foundProduct.quantity = quantity;
			} else {
				copy.push(cartProduct);
			}
			return copy;
		});
	};
	  
	const addOneToCart = (id) => {
		const quantity = getProductQuantity(id);

		if (quantity === 0) { 
			//product is not in cart
			setCartProducts([
					...cartProducts,
					{
						id: id,
						quantity: 1,
					},
				]);
		} else { 
			//product is in cart
			// [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
			setCartProducts(
				cartProducts.map(
					(product) =>
					product.id === id //if condition
					? { ...product, quantity: product.quantity + 1 } //if statement is true
					: product //if statement is false
				)
			);
		}
	};

	const removeOneFromCart = (id) => {
		const quantity = getProductQuantity(id);

		if (quantity === 1) {
			deleteFromCart(id);
		} else {
			setCartProducts(
				cartProducts.map(
					(product) =>
					product.id === id //if condition
					? { ...product, quantity: product.quantity - 1 } //if statement is true
					: product //if statement is false
				)
			);
		}
	};

	const deleteFromCart = (id) => {
		setCartProducts((cartProducts) =>
			cartProducts.filter((currentProduct) => {
				return currentProduct.id !== id;
			}) 
		);
	};

	const getCostBeforeDiscount = () => {
		return cartProducts.reduce((prev, curr) => {
		  const productData = getProductData(curr.id);
		  return prev + productData.price * curr.quantity;
		}, 0);
	  };
	
	const getTotalCost = () => {
	return cartProducts.reduce((prev, curr) => {
		const productData = getProductData(curr.id);
		// If the quantity exceeds 100 and there's a bulk price for the product, use that
		if (curr.quantity >= 100 && productData.bulkprice) {
			return prev + productData.bulkprice * curr.quantity;
		}

		return prev + productData.price * curr.quantity;
		}, 0);
	};

	const getProductImage = (id) => {
		return productsArray.find((product) => product.id === id)?.image;
	  };

	const setProductQuantity = (id, quantity) => {
		const product = cartProducts.find((product) => product.id === id);
		if (!product) {
			return;
		}
		product.quantity = quantity;
		setCartProducts([...cartProducts]);
	};

	const contextValue = {
		items: cartProducts,
		getProductQuantity,
		addToCart,
		addOneToCart,
		removeOneFromCart,
		deleteFromCart,
		getCostBeforeDiscount,
		getTotalCost,
		getProductImage,
		setProductQuantity,
	};

	return (
		<CartContext.Provider value={contextValue}>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;