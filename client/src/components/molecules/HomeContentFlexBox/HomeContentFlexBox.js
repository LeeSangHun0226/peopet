import React from 'react';
import styles from './HomeContentFlexBox.scss';
import Bar from '../../atoms/Bar';
import classNames from 'classnames/bind'
const cx = classNames.bind(styles);

const HomeContentFlexBox = ({
  why,
  images,
  pc,
  tablet,
  onClick,
  content
}) => {

  return (
    <div className={cx('content', content)}>
      {
        images.map((image, i) => (
          <div className={cx('image', content)} key={`${content}+${i}`}>
            <img
              className={cx('img', content)}
              src={image.img}
              alt={i}
            />
            {
              image.breed
              ?
                <div className={cx('review-wrapper')}>
                  {
                    image.description.split('<br/>').map((text, i) => (
                      <p key={i} className={cx('description', content)}>{text}</p>
                    ))
                  }
                  <Bar short/>
                  <h4 className={cx('title')}>
                    by&nbsp;{image.breed}&nbsp;보호자
                  </h4>
                </div>
              :
                image.description.split('<br/>').map((text, i) => (
                  <p key={i} className={cx('description', content)}>{text}</p>
                ))
            }
          </div>
        ))
      }
    </div>
  );
};

export default HomeContentFlexBox;
