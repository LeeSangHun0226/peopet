import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeTitle.scss';
import classNames from 'classnames/bind'
// import homeGlassImg from '../../../images/home_glass.png';
// import homeBracketLeftImg from '../../../images/home-bracket-left.png';
// import homeBracketRightImg from '../../../images/home-bracket-right.png';

const cx = classNames.bind(styles);

const HomeTitle = ({ authed, location }) => {
  return (
    <div className={cx('home-title')}>
      <div className={cx('content-wrapper')}>
      {/*}  
      <img className={cx('image')} src={homeGlassImg} alt="homeGlassImg" />
    */}
        <div className={cx('img-wrapper')}>
        {/*
        <img className={cx('bracketImg')} src={homeBracketLeftImg} alt="homeBracketLeftImg" /> 
      */}
          <p className={cx('new')}>NEW</p>
          <h2 className={cx('title')}>    
            태어난 곳을 확인할 수 있는<br/>
            <b>반려견 입양 서비스 &#8216;페오펫&#8217;입니다.</b>
          </h2>
          <Link to="/support" className={cx('go')}>
            입양하러가기&#62; &#62;
          </Link>
          
            <h2 className={cx('title-mobile')}>
              태어난 곳을
            </h2>
            <h2 className={cx('title-mobile')}>
              확인할 수 있는
            </h2>
            <h2 className={cx('title-mobile')}>
              반려견 입양 서비스
            </h2>
            <h2 className={cx('title-mobile-bold')}>
              &#8216;페오펫&#8217;입니다.
            </h2>
            <Link to="/support" className={cx('go-mobile')}>
              입양하러가기&#62; &#62;
            </Link>
            {/*}
            <img className={cx('bracketImg')} src={homeBracketRightImg} alt="homeBracketLeftImg" />
    */}
        </div>
      </div>
    </div>
  );
};

export default HomeTitle;
