import React from 'react';
import styles from './BreederIntro.scss';
import classNames from 'classnames/bind';
// import FlexBox from '../../atoms/FlexBox';
const cx = classNames.bind(styles);

const BreederIntro = ({ breederIntroData }) => {
  
  return (
    <div className={cx('breederIntro')} style={{ backgroundImage: `url(${breederIntroData.image})`}}>
      <div className={cx('contents')}>
        <p className={cx('title')}>
          <strong>브리더는</strong> <br />
          견종의 특성을 이해하고 체계적으로 관리합니다.
        </p>
      </div>
    </div>
  )
};

export default BreederIntro;
