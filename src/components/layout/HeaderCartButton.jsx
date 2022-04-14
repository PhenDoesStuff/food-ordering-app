import React from 'react';
import './HeaderCartButton.css';
import CartIcon from '../cart/CartIcon';

const HeaderCartButton = () => {
	return (
		<button className='button'>
			<span className='icon'>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className='badge'>3</span>
		</button>
	);
};

export default HeaderCartButton;

