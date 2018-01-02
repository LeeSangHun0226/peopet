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
}) => {
  return (
    <div
      className={cx('page', { wide, big, middle, short, review })}
      style={{
        marginTop,
      }}  
    >
      <div className={cx('content', { grey })}>
        <div className={cx('title-wrapper', { big, middle, short, review })}>
          {
            !titleImage ? false : <img className={cx('title-image', { wide, bigImage })} src={titleImage} alt='home-service-title-img' />
          }
          {
            !titleBr
              ? <h3 className={cx('title', { wide })}>{title}</h3>
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
            className={cx('sub-title-wrapper')}
            style={{
              width,
            }}
          >        
          
            { 
              subTitle.split('<br/>').map((text, i) => {
              return (
              <p key={i} className={cx('sub-title', { wide })}>{text}</p>
            )})}
          </div>
        </div>
      {children}
      </div>
    </div>
  );
};

export default HomeTemplate;
