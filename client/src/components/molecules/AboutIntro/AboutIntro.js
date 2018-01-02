import React from 'react';
import styles from './AboutIntro.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AboutIntro = ({ image, title, subTitle, position, attribute, children }) => {
  return (
    <div className={cx('page', position)}>
      <div className={cx('image-wrapper')}>
        <img className={cx('image', attribute)} src={image} alt={`${title}-img`}/>
      </div>
      <div className={cx('title-wrapper')}>
        {
          title.split('<br/>').map((text, i) => (
            <h3 key={i} className={cx('title')}>
              {text}
            </h3>
          ))
        }
        
        <div className={cx('bar')} />
        {
          subTitle.map((texts, i) => {
            if (texts.label) {
              return (
                <div key={i} className={cx('sub-title')}>
                  <p className={cx('label')}>
                    {texts.label}
                  </p>
                  {
                    texts.description
                    ?
                      <p key={i} className={cx('description')}>
                        {texts.description}
                      </p>
                    : 
                      <p key={i} className={cx('sub-description')}>
                        {texts.subDescription}
                      </p>
                  }
                </div>
              )
            }

            return texts.description.split('<br/>').map((text, i) => (
              <div key={i} className={cx('sub-title')}>
                <p className={cx('description')}>
                  {text}
                </p>
              </div>
            ))
          }
          )
        }
      </div>
      {children}
  </div>
  );
};

export default AboutIntro;
