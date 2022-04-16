import React from 'react';
import './Header.css';
import meals from '../../static/images/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart }) => {
	return (
		<>
			<header className='header'>
				<h1>ReactMeals</h1>
				<HeaderCartButton
					onClick={onShowCart}
				/>
			</header>
			<div className='main-image'>
				<img src={meals} alt='Header image' />
			</div>
		</>
	);
};

export default Header;

