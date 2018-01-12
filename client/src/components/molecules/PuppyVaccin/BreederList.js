import React from 'react';
import styles from './BreederList.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
// import Button from '../../atoms/Button';
const cx = classNames.bind(styles);

const BreederList = ({
  titleImage,
  title,
  description,
  tag,
  breederList,
  history,
  match,
  location,
  index,
}) => {
  // console.log(match)
  const descriptionText = description.slice(0,30);
  let breederId;
  !breederList[0] ? breederId = false : breederId = breederList[0].breederId;
    return (
      <div className={cx('BreederList')}>
        <Link
          className={cx('link')}
          to={{
            pathname: `/breeders/${breederId}`,
            state: {
              description,
            }
          }} 
        >
        {
          index !== 0 ? false : <p className={cx('location')}>HOME &gt; <b>BREEDER</b></p>
        }
        <div className={cx('image-wrapper')}>
          <img src={titleImage} alt="title-img" className={cx('image')} />
          {
            breederList.map((breeder, i) => {
              return (
                <img key={i} src={breeder.breederImage} alt="sub-img" className={cx(`sub-image-${i}`)} />
              )
            })
          }
        </div>
        <div className={cx('content-wrapper')}>
          <h4 className={cx('title')}>{title}</h4>
          <p className={cx('description')}>{descriptionText}...</p>
        </div>
        <div className={cx('tag-wrapper')}>
          <p className={cx('tag')}>
            관련브리더 찾아보기
          </p>
        </div>
      </Link>
    </div>
  )
};

export default BreederList;
