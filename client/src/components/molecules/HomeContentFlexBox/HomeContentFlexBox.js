import React from 'react';
import styles from './HomeContentFlexBox.scss';
import classNames from 'classnames/bind'
import FlexBox from '../../atoms/FlexBox';
import ColorText from '../../atoms/ColorText';
import Button from '../../atoms/Button';
const cx = classNames.bind(styles);

const HomeContentFlexBox = ({ images, onClick, content }) => {
  return (
    <FlexBox className={cx('content', content)}>
      {
        images.map((image, i) => {
          // if ( content === 'review') {
          //   return (
          //     <div className={cx('image')} onClick={() => onClick(image)} key={`${content}+${i}`}>
          //       <img
          //         className={cx('img', content)}
          //         src={image.img}
          //         alt={i}
          //       />
          //     </div>    
          //   )
          // }

          if (content === 'review') {
            return (
              <div className={cx('review')} key={`${content}+${i}`}>
                <img
                  className={cx('image')}
                  src={image.img}
                  alt={i}
                />
                <p><strong>{image.breed}</strong> 보호자님</p>
                {
                  image.description.split('<br/>').map((text, i) => (
                    <p key={i} className={cx('description')}>&#8216;&#8216;{text}&#8217;&#8217;</p>
                  ))
                }
              </div>
            )
          }

          return (
            <div className={cx('image')}  key={`${content}+${i}`}>
              <img
                className={cx('img', content)}
                src={image.img}              
                alt={i}
              />
              {
                content === 'breeder'
                  ? <ColorText main text={image.description} textColor="white" around />
                  : <div className={cx('description')}>{image.description}</div>
              }
            </div>
        )})
      }
    </FlexBox>
  );
};

export default HomeContentFlexBox;
