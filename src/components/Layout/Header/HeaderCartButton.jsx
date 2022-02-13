import React, { useContext } from 'react';

import './HeaderCartButton.css';
import CartIcon from '../../Cart/CartIcon';
import CartContext from '../../../store/cart-context';

function HeaderCartButton({ onClick }) {
	const cartCtx = useContext(CartContext);

	const numberOfCartItems = cartCtx.items.reduce(
		(currentNum, item) => {
			return currentNum + item.amount;
		},
		0
	);

	return (
		<>
			<button className='button' onClick={onClick}>
				<span className='icon'>
					<CartIcon />
				</span>
				<span>Your Cart</span>
				<span className='badge'>{numberOfCartItems}</span>
			</button>
		</>
	);
}

export default HeaderCartButton;
