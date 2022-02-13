import React, { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import './MealItem.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ id, name, description, foodPrice }) => {
	const price = `$${foodPrice.toFixed(2)}`;
	const cartCtx = useContext(CartContext);

	const addToCartHandler = amount => {
		cartCtx.addItem({
			id: id,
			name: name,
			amount: amount,
			price: foodPrice,
		});
	};

	return (
		<li className='meal'>
			<div>
				<h3>{name}</h3>
				<div className='description'>{description}</div>
				<div className='price'>{price}</div>
			</div>
			<div>
				<MealItemForm
					id={id}
					onAddToCart={addToCartHandler}
				/>
			</div>
		</li>
	);
};

export default MealItem;
