import React from 'react';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import './MealItem.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ name, description, price, id }) => {
	const cartCtx = useContext(CartContext);

	const mealPrice = `$${price.toFixed(2)}`;

	const addItemToCartHandler = amount => {
		cartCtx.addItem({
			id: id,
			name: name,
			amount: amount,
			price: price,
		});
	};

	return (
		<li className='meal'>
			<div>
				<h3>{name}</h3>
				<div className='description'>{description}</div>
				<div className='price'>{mealPrice}</div>
			</div>
			<div>
				<MealItemForm onAddToCart={addItemToCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;

