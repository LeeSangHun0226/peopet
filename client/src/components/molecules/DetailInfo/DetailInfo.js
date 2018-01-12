import React from 'react';
// import Slider from 'react-slick';
import styles from './DetailInfo.scss';
import classNames from 'classnames/bind'
import ImageDescription from '../../atoms/ImageDescription';
import ListDescription from '../../atoms/ListDescription';
const cx = classNames.bind(styles);

const DetailInfo = ({
  breederDescription,
  breederImage,
  breederName,
  dogImage,
  dogDescription,
  kannelBreed,
  kannelName,
  image,
}) => {
  const breederData = {
    image: breederImage,
    description: breederDescription
  };

  return (
    <div className={cx('detail-info')} >
      <ListDescription
        location="detail-info"
        first={`${breederName} 브리더`}
        second={kannelName}
        third={breederData}
        image={image}
      /> 
      <ImageDescription
        image={dogImage[0]}
        location="detail-info"
        title={kannelBreed}
        description={dogDescription}
      />  
    </div>
  )
}

export default DetailInfo;