import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Modal from '../UI/Modal';
import './Cart.css';

const Cart = ({ onClose }) => {
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = id => {};

	const cartItemAddHandler = item => {};

	const cartItems = (
		<ul className='CartItems'>
			{cartCtx.items.map(item => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(
						null,
						item.id
					)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);

	return (
		<Modal onClose={onClose}>
			{cartItems}
			<div className='total'>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className='actions'>
				<button className='button__alt' onClick={onClose}>
					Close
				</button>
				{hasItems && (
					<button className='button'>Order</button>
				)}
			</div>
		</Modal>
	);
};

export default Cart;
