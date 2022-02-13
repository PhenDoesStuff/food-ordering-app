import React from 'react';
import './MealItem.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ id, name, description, foodPrice }) => {
	const price = `$${foodPrice.toFixed(2)}`;

	return (
		<li className='meal'>
			<div>
				<h3>{name}</h3>
				<div className='description'>{description}</div>
				<div className='price'>{price}</div>
			</div>
			<div>
				<MealItemForm id={id} />
			</div>
		</li>
	);
};

export default MealItem;
