import React from 'react';

const Cart = () => {
	const cartItems = (
		<ul className='cartItems'>
			{[
				{
					id: 'c1',
					name: 'Sushi',
					amount: 2,
					price: 12.99,
				},
			].map(item => (
				<li>{item.name}</li>
			))}
		</ul>
	);

	return (
		<div className='cart'>
			{cartItems}
			<div className='total'>
				<span>Total Amount</span>
				<span>35.63</span>
			</div>
			<div className='actions'>
				<button className='button--alt'>
					Close
				</button>
				<button className='button'>
					Order
				</button>
			</div>
		</div>
	);
};

export default Cart;

