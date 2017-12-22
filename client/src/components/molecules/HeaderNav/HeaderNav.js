import React, { Component } from 'react';
import styles from './HeaderNav.scss';
import classNames from 'classnames/bind';
import FlexBox from '../../atoms/FlexBox';
import NavItem from '../../atoms/NavItem';
// import HeaderBurger from '../../molecules/HeaderBurger';
// import burgerImg from '../../../images/burger_menu.png';
// import Button from '../../atoms/Button';
// import { slide as Menu } from 'react-burger-menu';

const cx = classNames.bind(styles);

class HeaderNav extends Component {

  state = {
    responsive: false,
  }

  handleClick = () => {
    this.setState({
      responsive: !this.state.responsive,
    })
  }

  renderNav = (location) => (
    <div className={cx('header-nav')}>
      <NavItem location={location} to="/breeders">BREEDERS</NavItem>
      <div className={cx('bar')} />
      <NavItem location={location} to="/support">입양 문의</NavItem>
    </div>
  );

  renderResponsiveNav = (location, responsive) => (
    <div className={cx('header-nav-responsive')}>
      <div className={cx('wrapper')}>
        <NavItem location={location} responsive={responsive} to="/about">ABOUT US</NavItem>
        <div className={cx('bar')} />
        <NavItem location={location} responsive={responsive} to="/breeders">BREEDERS</NavItem>
        <div className={cx('bar')} />
        <NavItem location={location} responsive={responsive} to="/blog">BLOG</NavItem>
        <div className={cx('bar')} />
        <NavItem location={location} responsive={responsive} to="/partnership">PARTNER SHIP</NavItem>
        <div className={cx('bar')} />
        <NavItem location={location} responsive={responsive} to="/support">입양 문의</NavItem>
      </div>
    </div>
  )

  render() {
    const { location } = this.props;
    return (
      <FlexBox >
      {/*}
        {
          this.state.responsive
          ? this.renderResponsiveNav(location, responsive)
          : this.renderNav(location)
        }
        <button className={cx('responsive-button')} onClick={() => this.handleClick()}>
          <img className={cx('burger')} src={burgerImg} alt="burgerImg" />
        </button>
      */}
        {this.renderNav(location)}
      </FlexBox>
    );
  }
};



// class HeaderNav extends React.Component {
//   showSettings(event) {
//     event.preventDefault();
//   }

//   render() {
//     const { location } = this.props;
//     let responsive = true;
//     return (
//       <Menu noOverlay right width={250} customBurgerIcon={<img src={burgerImg} alt="burgerImg" />} >
//         <NavItem location={location} responsive={responsive} to="/about">ABOUT US</NavItem>
//         <div className={cx('bar')} />
//         <NavItem location={location} responsive={responsive} to="/breeders">BREEDERS</NavItem>
//         <div className={cx('bar')} />
//         <NavItem location={location} responsive={responsive} to="/blog">BLOG</NavItem>
//         <div className={cx('bar')} />
//         <NavItem location={location} responsive={responsive} to="/partnership">PARTNER SHIP</NavItem>
//         <div className={cx('bar')} />
//         <NavItem location={location} responsive={responsive} to="/support">입양 문의</NavItem>
//       </Menu>
//     );
//   }
// }

export default HeaderNav;
