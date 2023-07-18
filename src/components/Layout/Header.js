import { Fragment } from 'react';
import Button from '../UI/Button';
import styles from './Header.module.css';

import mealsImage from '../../assets/meals.jpg';

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='A table full of food' />
      </div>
    </Fragment>
  );
};

export default Header;
