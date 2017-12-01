import React from 'react';
import styles from './HomeReviewModal.scss';
import classNames from 'classnames/bind'
// import Button from '../../atoms/Button';
const cx = classNames.bind(styles);

const HomeReviewModal = ({ review }) => {
  const { img, owner, breed, breeder, description } = review;
  
  return (
    <div className={cx('review')}>
      <div className={cx('img')} style={{ backgroundImage: `url(${img}`}}/>
      <div className={cx('content')}>
        <h3 className={cx('owner')}>
          {owner} 님
        </h3>
        <h4 className={cx('breed')}>
          견종: {breed}
        </h4>
        <h4 className={cx('breeder')}>
          브리더: {breeder}
        </h4>
        <div className={cx('bar')}/>
        <div className={cx('description-wrapper')}>
          {description.split('\n').map(text => (
            <p className={cx('description')}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeReviewModal;
