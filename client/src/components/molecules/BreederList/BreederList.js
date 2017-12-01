import React from 'react';
import styles from './BreederList.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import FlexBox from '../../atoms/FlexBox';
// import Button from '../../atoms/Button';
const cx = classNames.bind(styles);

const BreederList = ({
  titleImage,
  title,
  description,
  breederImage,
  tag,
  index,
  breederList,
  history,
}) => {
  const renderDescription = description.split('<br/>');
  return (
    <FlexBox className={cx('breederList')} >      
      <div>
        <FlexBox className={cx('page')}>
          <FlexBox className={cx('titleImage-wrapper')}>
            <img className={cx('titleImage')} src={titleImage} alt={`breederTitleImage ${index}`} />
          </FlexBox>
          <FlexBox column className={cx('main')}>
            <p className={cx('title')}>
              {title}
            </p>
            {
              renderDescription.map(description => (
                <p className={cx('description')}>
                  {description}
                </p>
              ))
            }
            
            <FlexBox column className={cx('breederImage-wrapper')}>
              <p className={cx('breederImage-title')}>
              관련 브리더
              </p>
              <div className={cx('wrapper')}>
               {
                  breederList.map((breeder, i) => 
                    <Link to={`/breeders/${breeder.breederId}`} className={cx('link')}>
                      <img
                        className={cx('breederImage')} 
                        key={i} 
                        src={breeder.breederImage} 
                        alt={`breederImage ${i}`}
                      />
                    </Link>
                  )
                }
              </div>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <FlexBox className={cx('tag-wrapper')}>
          <div className={cx('layout')}>
          {
            tag.map((tag, i) => <p key={i} className={cx('tag')}>#{tag}</p>)
          }
          </div>
        </FlexBox>
      </div>
    </FlexBox>
  )
};

export default BreederList;
