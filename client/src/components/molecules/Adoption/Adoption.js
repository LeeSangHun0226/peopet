import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from './Adoption.scss';
import classNames from 'classnames/bind'
// import Button from '../../atoms/Button';
const cx = classNames.bind(styles);

class Adoption extends Component {

  componentDidMount() {
    setTimeout(() => { window.dispatchEvent(new Event('resize')) }, 0);
  }

  render() {
    const {
      adoptionData,
      line,
    } = this.props;
    const settings = {
      dots: true,
      // dotsClass: 'slick-dots-adoption',
      arrows: false,
      // autoplay: true,
      speed: 500,
      // centerMode: true,
      // autoplaySpeed: 3000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: false,
      cssEase: 'linear',
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [{ 
        breakpoint: 1600,
        settings: { 
          slidesToShow: 4,
          slidesToScroll: 1,
        }
        }, {
        breakpoint: 1200,
        settings: { 
          slidesToShow: 3,
          slidesToScroll: 1
        } 
        }, { 
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        } 
        }, { 
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
        }, {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }  
      }]
    }
  
    return (
      <div className={cx('adoption')}>
        <div className={cx('slider-wrapper')}>
          <Slider {...settings} className={cx('slider')}>
            {
              adoptionData.map((data, i) => (
                <div className={cx('page')} key={i}>
                  <div className={cx('image-wrapper')}>
                    <img className={cx('image')} src={data.img} alt={`Adoption${i}`} />
                  </div>
                  <img className={cx('line')} src={line} alt='adoption-line' />
                  <div className={cx('content-wrapper')}>
                    <p className={cx('title')}>{data.title}</p>
                    <p className={cx('description')}>성별: {data.sex}</p>
                    <p className={cx('description')}>부모견: {data.parent}</p>
                    <p className={cx('description')}>견종: {data.breed}</p>
                    <p className={cx('description')}>출생일: {data.birthDate}</p>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    );
  }
}

export default Adoption;

//<a href="http://blog.naver.com/peopet/221092557955">