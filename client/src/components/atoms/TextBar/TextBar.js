import React from 'react';
import styles from './TextBar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TextBar = ({
  title,
  image,
  description,
}) => {
  return (
    <div className={cx('text-bar')}>
      <p className={cx('title')}>{title}</p>
      <img className={cx('image')} src={image} alt="home-kakao-img" />
      <p className={cx('description')}>{description}</p>
    </div>
  );
};

export default TextBar;