import React from 'react';
import Bar from '../../atoms/Bar';
import styles from './HomeTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const HomeTemplate = ({
  wide,
  big,
  middle,
  width,
  marginTop,
  point,
  title,
  titleImage,
  bar,
  responsive,
  subTitle,
  children,
  titleBr,
  grey,
  short,
  review,
  bigImage,
  diary,
  breeder,
  detail,
}) => {
  return (
    <div
      className={cx('page', {
        wide,
        big,
        middle,
        short,
        review,
        diary,
        breeder,
        detail,
       })}
      style={{
        marginTop,
      }}  
    >
      <div className={cx('content', { grey })}>
        <div className={cx('title-wrapper', {
          big,
          middle,
          short,
          review,
          diary,
        })}>
          {
            !titleImage
              ? false
              : <img className={cx('title-image', {
                  wide,
                  bigImage,
                  breeder,
                  detail,
                })} src={titleImage} alt='home-service-title-img'
                />
          }
          {
            !title
              ? false
              : title.split('<br/>').map((text, i) => {
                  return (
                    <h3 key={i} className={cx('title', { wide, titleBr })}>{text}</h3>
                  )
                })
          }
          {
            !bar ? false : <Bar wide={wide} />
          }
          <div
            className={cx('sub-title-wrapper', { diary })}
            style={{
              width,
            }}
          >
            { 
              !subTitle ? false :
              subTitle.split('<br/>').map((text, i) => {
                return (
                <p key={i} className={cx('sub-title', { wide, detail })}>{text}</p>
              )})}
          </div>
        </div>
      {children}
      </div>
    </div>
  );
};

export default HomeTemplate;
