import React from 'react';
import styles from './HomeTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const HomeTemplate = ({ title, bar, responsive, subTitle, children }) => {
  return (
    <div className={cx('page')}>
      <div className={cx('content', { responsive })}>
        <div className={cx('title-wrapper')}>
          <h3 className={cx('title')}>
            {title}
          </h3>
          <div className={cx('sub-title-wrapper', { bar })}>
            { !bar ? false : subTitle.split('<br/>').map((text, i) => {
              return (
              <p key={i} className={cx('sub-title')}>{text}</p>
            )})}
          </div>
        </div>
      {children}
      </div>
    </div>
  );
};

export default HomeTemplate;
