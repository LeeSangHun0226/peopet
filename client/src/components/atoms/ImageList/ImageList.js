import React from 'react';
import styles from './ImageList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ImageList = ({
  location,
  nameImage,
  images,
  ...rest,
  children,
}) => {
  return (
    <div className={cx('ImageList')}>
      {
        !nameImage
          ? false
          : <img className={cx('name-image')} src={nameImage} alt='name-img' />
      }
      {
        !location
          ? false
          : <p className={cx('location')}>{location}</p>
      }
      <div className={cx('contents')}>
        <div className={cx('content')}>
          {
            images.map((image, i) => {
              return (
                <img className={cx('image')} src={image} key={i} alt={`kannel-img-${i}`} />
              )
            })
          }
        </div>
        {children}
      </div>
    </div>
  );
};

export default ImageList;
