import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import Logo from '../../atoms/Logo';
import HeaderNav from '../../molecules/HeaderNav';

const cx = classNames.bind(styles);

const Header = ({
  authed,
  location,
}) => {
  return (
    <div className={cx('header', location )}>
      <div className={cx('responsive')}>
        <Logo location={location} />    
        <HeaderNav authed={authed} location={location} />
      </div>
    </div>
  );
};

export default Header;
