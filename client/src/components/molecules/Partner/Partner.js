import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from './Partner.scss';
import classNames from 'classnames/bind'
// import Button from '../../atoms/Button';
const cx = classNames.bind(styles);

class Partner extends Component {

  componentDidMount() {
    setTimeout(() => { window.dispatchEvent(new Event('resize')) }, 0);
  }

  render() {
    const { images } = this.props;
    const settings = {
      dots: false,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: false,
      cssEase: 'linear',
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [{ 
        breakpoint: 1600,
        settings: { 
          slidesToShow: 5,
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
          slidesToShow: 3,
          slidesToScroll: 1
        }  
      }]
    }
  
    return (
      <div className={cx('partner')}>
        <Slider {...settings}>
          {
            images.map((data, i) => (
              <div key={i}>
                <img className={cx('image')} src={data.img} alt={`partner${i}`} />
                {data.description}
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }
}

export default Partner;
