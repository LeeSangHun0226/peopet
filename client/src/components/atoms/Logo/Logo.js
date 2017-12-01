import React from 'react';
import styles from './Logo.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import logoImg from '../../../images/head-logo.png';

const cx = classNames.bind(styles);

const Logo = ({ location }) => {
  return (
    <Link to="/" className={cx('logo', location)}>
      <img className={cx('img')} src={logoImg} alt="logo" />
    </Link>
  );
};

export default Logo;
