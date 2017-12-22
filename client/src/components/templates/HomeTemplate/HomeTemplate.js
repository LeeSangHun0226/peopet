import React from 'react';
import styles from './HomeTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const HomeTemplate = ({ width, marginTop, point, title, titleImage, bar, responsive, subTitle, children }) => {
  return (
    <div
      className={cx('page')}
      style={{
        marginTop,
        
      }}  
    >
      <div
        className={cx('content', { responsive })}
        // style={{
          // width,
        // }}
      >
        <div className={cx('title-wrapper')}>
        {
          titleImage
          ?
            <img className={cx('title-image')} src={titleImage} alt='home-service-title-img' />
          :
            <h3 className={cx('title')}>{title}</h3>
        }
        {
          point
          ?
            <div className={cx('point')}/>
          :
            false
        }
          <div
            className={cx('sub-title-wrapper', { bar })}
            style={{
              width,
            }}
          >
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
