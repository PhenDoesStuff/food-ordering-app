import React from 'react';
import './MealItemForm.css';
import Input from '../../ui/Input';
import { useRef } from 'react';
import { useState } from 'react';

const MealItemForm = ({ id, onAddToCart }) => {
	const amountInputRef = useRef();
	const [amountIsValid, setAmountIsValid] = useState(true);

	const submitHandler = event => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount; // This converts a string to a number

		if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
			setAmountIsValid(false);
			return;
		}

		onAddToCart(enteredAmountNumber);
	};

	return (
		<form className='form' onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
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
			{!amountIsValid && <p>Please enter a valid amount.</p>}
		</form>
	);
};

export default MealItemForm;

