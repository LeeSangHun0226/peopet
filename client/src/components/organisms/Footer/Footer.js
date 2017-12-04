import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import ScrollButton from '../../atoms/ScrollButton';

const cx = classNames.bind(styles);

const Footer = ({
  onLoginButtonClick,
  user,
  solid,
  authed,
}) => {
  return (
    <div className={cx('footer', { solid })}>
      <div className={cx('info-wrapper')}>
        <p className={cx('info-title')}>&#9400; 2017. Peopet, Inc. All Rights Reserved</p>
        <p className={cx('info-sub')}>사업자등록번호: 354-88-00899 | 법인명: (주)코스모스이펙트 | 대표자: 최현일 | 주소:서울 강남구 논현로98길 28(역삼동 671) | 시티빌딩 유니버스점 B1 | 고객문의:010-7551-1669</p>
      </div>
      <div className={cx('info-wrapper-mobile')}>
        <p className={cx('info-title')}>&#9400; 2017. Peopet, Inc. All Rights Reserved</p>
        <p className={cx('info-sub')}>사업자등록번호: 354-88-00899 | 법인명: (주)코스모스이펙트</p>
        <p className={cx('info-sub')}>대표자: 최현일 | 고객문의:010-7551-1669</p>
        <p className={cx('info-sub')}>주소:서울 강남구 논현로98길 28(역삼동 671) 시티빌딩 유니버스점 B1</p>
      </div>
      <ScrollButton className={cx('top')} scrollStepInPs="1000" delayInMs="0.001"/>
    </div>
  );
};

export default Footer;
