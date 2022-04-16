import React from 'react';
import './HeaderCartButton.css';
import CartIcon from '../cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = ({ onClick }) => {
	const cartCtx = useContext(CartContext);

	const numberOfCartItems = cartCtx.items.reduce(
		(curNumber, item) => {
			return curNumber + item.number;
		},
		0
	);

	return (
		<button className='button' onClick={onClick}>
			<span className='icon'>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className='badge'>
				{numberOfCartItems}
			</span>
		</button>
	);
};

export default HeaderCartButton;

