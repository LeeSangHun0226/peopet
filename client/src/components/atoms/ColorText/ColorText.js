import React from 'react';
import styles from './ColorText.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ColorText = ({ text, main, textColor, around }) => {
  return (
    <div className={cx('colorText', { main, around })}>
      <div className={cx('text', textColor)}>
        {text}
      </div>
    </div>
  );
};

export default ColorText;