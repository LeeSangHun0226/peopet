import React from 'react';
import styles from './ListDescription.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ListDescription = ({
  first,
  second,
  third,
  image,
  ...rest
}) => {
  return (
    <div className={cx('ListDescription')}>
      <div className={cx('first')}>
        <p className={cx('title')}>{first}</p>
      </div>
      <div className={cx('bar')}/>
      <div className={cx('second')}>
        <p className={cx('title')}>{second}</p>
      </div>      
      <div className={cx('bar')}/>
      <div className={cx('third')}>
        <div className={cx('image-wrapper')}>
          <img className={cx('image')} src={third.image} alt={`breeder-detail-${first}`}/>
        </div>
        <p className={cx('description')}>{third.description}</p>
        <a href="http://goto.kakao.com/@peopet">
          <button className={cx('button-kakao')}>
            <img className={cx('image')} src={image} alt='detail-kakao-img' />
            <p className={cx('text')}>카톡문의 @페오펫</p>
          </button>
        </a>
        <a href="http://peopet.co.kr/support">
          <button className={cx('button-support')}>입양 문의하러 가기</button>
        </a>
      </div>
    </div>
  );
};

export default ListDescription;
