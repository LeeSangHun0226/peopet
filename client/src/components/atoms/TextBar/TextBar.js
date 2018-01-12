import React from 'react';
import styles from './TextBar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TextBar = ({
  title,
  image,
  description,
  link,
  marginTop,
}) => {
  return (
    <div
      className={cx('text-bar')}
      style={{ marginTop }}
    >
      <p className={cx('title')}>{title}</p>
      <a href={link}>
        <img className={cx('image')} src={image} alt="home-kakao-img" />
      </a>
      <p className={cx('description')}>{description}</p>
    </div>
  );
};

export default TextBar;