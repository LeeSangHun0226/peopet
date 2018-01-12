import React from 'react';
import styles from './InfoBox.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const InfoBox = ({
  title,
  image,
  description,
  location,
  ...rest,
}) => {

  return (
    <div className={cx('InfoBox')}>
      <p className={cx('title')}>{title}</p>
      {
        !image
          ? false
          : <img
              className={cx('image')}
              src={image}
              alt={`${location}-info-img`}
            />
      }
      {
        !description
          ? false
          : description.split('<br/>').map((text, i) => (
              <p className={cx('description')}>{text}</p>
            ))
      }

      
    </div>
  );
};

export default InfoBox;
