import React from 'react';
import './HeaderCartButton.css';
import CartIcon from '../cart/CartIcon';

const HeaderCartButton = ({ onClick }) => {
	return (
		<button className='button' onClick={onClick}>
			<span className='icon'>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className='badge'>3</span>
		</button>
	);
};

export default HeaderCartButton;

