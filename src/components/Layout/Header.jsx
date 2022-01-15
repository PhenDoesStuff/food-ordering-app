import React from 'react';

import mealsImage from '../../Assets/meals.jpg';
import './Header.css';

function Header() {
	return (
		<>
			<header className='header'>
				<h1>ReactMeals</h1>
				<button>Cart</button>
			</header>
			<div className='main-image'>
				<img
					src={mealsImage}
					alt='A table full of delicious food!'
				/>
			</div>
		</>
	);
}

export default Header;
