import React, { Component } from 'react';
import styles from './HeaderBurger.scss';
import classNames from 'classnames/bind';
import FlexBox from '../../atoms/FlexBox';
import NavItem from '../../atoms/NavItem';
import burgerImg from '../../../images/burger_menu.png';

const cx = classNames.bind(styles);

const HeaderBurger = ({ onClick, location }) => {

  return (
    <FlexBox column className={cx('headerBurger')}>
      <button className={cx('responsive-button')} onClick={onClick}>
        <img className={cx('burger')} src={burgerImg} alt="burgerImg" />
      </button>
      <div className={cx('header-nav')}>
        <NavItem location={location} to="/about">
          ABOUT US
        </NavItem>
        <div className={cx('bar')} />
        <NavItem location={location} to="/breeders">
          BREEDERS
        </NavItem>
        <div className={cx('bar')} />
        <NavItem location={location} to="/blog">
          BLOG
        </NavItem>
        <div className={cx('bar')} />
        <NavItem location={location} to="/partnership">
          PARTNER SHIP
        </NavItem>
        <div className={cx('bar')} />
        <NavItem location={location} to="/support">
          입양 문의
        </NavItem>
      </div>
    </FlexBox>
  );
} 

export default HeaderBurger;