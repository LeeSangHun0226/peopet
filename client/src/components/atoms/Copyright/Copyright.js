import React from 'react';
import styles from './Copyright.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Copyright = ({
  image,
  text,
}) => {
  return (
    <div className={cx('Copyright')}>
      <img className={cx('image')} src={image} alt='detail-copyright-img' />
      <div className={cx('text-wrapper')}>
        {
          text.split('<br/>').map((data, i) => (
            <p key={i} className={cx('text')}>{data}</p>
          ))          
        }
      </div>
    </div>
  );
};

export default Copyright;