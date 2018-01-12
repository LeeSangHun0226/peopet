import React from 'react';
import styles from './Error.scss';
import classNames from 'classnames/bind';
import errorImg from '../../../images/error.png';

const cx = classNames.bind(styles);

const Error = () => {
  return (
    <div className={cx('Error')}>
      <img
        className={cx('image')}
        src={errorImg}
        alt='error-img'
      />
    </div>
  );
};

export default Error;