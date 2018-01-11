import React from 'react';
import styles from './ImageDescription.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ImageDescription = ({
  image,
  location,
  title,
  description,
  ...rest
}) => {
  return (
    <div className={cx('ImageDescription')} >
      <div className={cx('image-wrapper')}>
        <img src={image} alt={`${location}-img`} className={cx('image')}/>
      </div>
      <p className={cx('title')}>{title}</p>
      <p className={cx('description')}>{description}</p>
    </div>
  );
};

export default ImageDescription;
