import classes from './Header.module.css';
import image from '../../assets/index.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
	return (
		<>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton />
			</header>
			<div className={classes['main-image']}>
				<img src={image} alt='A big tasty buffet' />
			</div>
		</>
	);
};

export default Header;

