import React from 'react';
import './MealItemForm.css';
import Input from '../../ui/Input';

const MealItemForm = ({ id }) => {
	return (
		<form className='form'>
			<Input
				label='Amount'
				input={{
					id: 'amount_' + id,
					tpye: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button>+ Add</button>
		</form>
	);
};

export default MealItemForm;

