import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NavItem = ({ location, responsive, children, to, history, ...rest }) => {
  
  if (to) {
    return (
      <Link className={cx('nav-item', location, { responsive })} to={to} {...rest}>{children} </Link>
    )
  }
  return (
    <div className={cx('nav-item', { location })} {...rest}>
      {children}
    </div>
  );
};

export default NavItem;
