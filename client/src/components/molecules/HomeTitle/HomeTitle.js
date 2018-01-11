import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeTitle.scss';
import classNames from 'classnames/bind'
import Button from '../../atoms/Button';
// import homeGlassImg from '../../../images/home_glass.png';
// import homeBracketLeftImg from '../../../images/home-bracket-left.png';
// import homeBracketRightImg from '../../../images/home-bracket-right.png';

const cx = classNames.bind(styles);

const HomeTitle = ({
  authed,
  location,
  image,
}) => {
  return (
    <div className={cx('page')}>
      <div className={cx('wrapper')}>
        <div className={cx('background')} />
        <div className={cx('content-wrapper')}>
          <div className={cx('content')}>
            <h2 className={cx('title')}>태어난 곳을 확인할 수 있는</h2>
            <img className={cx('title-image')} src={image} alt="home-title-img" />
            <Link to="/support">
              <Button square className={cx('go')} padding={'12px'}>
                지금 바로 입양하러 가기 
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTitle;
