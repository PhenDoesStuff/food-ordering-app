import React from 'react';
import './Header.css';
import meals from '../../static/images/meals.jpg';

const Header = () => {
	return (
		<>
			<header className='header'>
				<h1>ReactMeals</h1>
				<button>Cart</button>
			</header>
			<div className='main-image'>
				<img src={meals} alt='Header image' />
			</div>
		</>
	);
};

export default Header;
