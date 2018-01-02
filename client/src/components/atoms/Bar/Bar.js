import React from 'react';
import styles from './Bar.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Bar = ({
  short,
  wide,
}) => {
  return (
    <div className={cx('bar', {
      short,
      wide,
    })} />
  );
};

export default Bar;