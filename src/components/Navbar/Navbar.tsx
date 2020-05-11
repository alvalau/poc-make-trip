import React, {useState} from 'react';
import cx from 'classnames';
import styles from './navbar.module.scss';
import Button from '../Button';
import {Text} from '../Typography';
import Logo from '../Logo';

const Navbar = () => {
  const memuItem = ['About us', 'Destination', 'Booking', 'Contact us'];
  const [activeIndex] = useState(0);

  return (
    <div className={styles['navbar']}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <ul className={styles['navbar-menu']}>
        {memuItem.map((e, i) => {
          const cn = cx(
            activeIndex === i
              ? styles['navbar-menu-item__active']
              : styles['navbar-menu-item']
          );
          return (
            <li key={e} className={cn}>
              {e}
            </li>
          );
        })}
      </ul>
      <div className={styles['navbar-action']}>
        <Button className={styles['login-button']}>
          <Text text={'login'} toUpper />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
