import React from 'react';
import Button from '../Button';
import styles from './ListDescription.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ListDescription = ({
  first,
  second,
  third,
  ...rest
}) => {
  return (
    <div className={cx('ListDescription')}>
      <div className={cx('first')}>
        <p className={cx('title')}>{first}</p>
      </div>
      <div className={cx('bar')}/>
      <div className={cx('second')}>
        <p className={cx('title')}>{second}</p>
      </div>      
      <div className={cx('bar')}/>
      <div className={cx('third')}>
        <div className={cx('image-wrapper')}>
          <img className={cx('image')} src={third.image} alt={`breeder-detail-${first}`}/>
        </div>
        <p className={cx('description')}>{third.description}</p>
        <button className={cx('button')}>입양가능한 자견 보러가기</button>
      </div>
    </div>
  );
};

export default ListDescription;
