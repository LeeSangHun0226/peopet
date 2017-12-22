import React from 'react';
import styles from './Banner.scss';
import classNames from 'classnames/bind'
import Button from '../../atoms/Button';
const cx = classNames.bind(styles);

const Banner = ({ image }) => {
  return (
    <div className={cx('banner')} style={{ backgroundImage: `url(${image}`}}>
      <div className={cx('content')}>
        <p className={cx('title')}>
          사랑스러운 루트의
        </p>
        <p className={cx('title')}>
          <b>육아일기</b> 보러가기
        </p>
        <div className={cx('bar')}/>
        <p className={cx('sub-title')}>
          루트와 페오펫의 첫만남!
        </p>
        <p className={cx('sub-title')}>
          좌충우돌 성장기를 확인해 보세요
        </p>
        <div className={cx('bar')} />
        <Button className={cx('button')} onClick={() => window.location.assign('http://blog.naver.com/peopet/221118309091')}>바로가기</Button>
      </div>
    </div>
  );
};

export default Banner;
