import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import './MealItemForm.css';

const MealItemForm = ({ id, onAddToCart }) => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const submitHandler = event => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNum = +enteredAmount;

		if (
			enteredAmount.trim().length === 0 ||
			enteredAmountNum < 1 ||
			enteredAmountNum > 5
		) {
			setAmountIsValid(false);
			return;
		}

		onAddToCart(enteredAmountNum);
	};

	return (
		<form className='form'>
			<Input
				ref={amountInputRef}
				label='Amount'
				input={{
					id: 'amount_' + id,
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					default: '1',
				}}
			/>
			<button>Add</button>
			{!amountIsValid && (
				<p>Please enter a valid amount (1-5).</p>
			)}
		</form>
	);
};

export default MealItemForm;
