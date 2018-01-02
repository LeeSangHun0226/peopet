import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from './News.scss';
import classNames from 'classnames/bind'
import update from 'react-addons-update';
// import Button from '../../atoms/Button';
const cx = classNames.bind(styles);

class News extends Component {

  state = {
    newsData: [],
    loading: true,
  }

  componentDidMount() {
    this.setState({
      newsData: this.props.newsData,
      loading: false,
    })
    setTimeout(() => { window.dispatchEvent(new Event('resize')) }, 0);
  }

  onMouseOut = (i) => {
    const currentImg = this.state.newsData[i].defaultImg;
    this.setState({
      newsData: update(
        this.state.newsData,
        {
          [i]: {
            currentImg: {
              $set: currentImg
            },
          }
        }
      )
    });
  }

  onMouseOver = (i) => {
    const currentImg = this.state.newsData[i].hoverImg;
    this.setState({
      newsData: update(
        this.state.newsData,
        {
          [i]: {
            currentImg: {
              $set: currentImg
            },
          }
        }
      )
    });
  }

  render() {
    const { newsData } = this.state;
    const { onMouseOut, onMouseOver } = this;
    const settings = {
      dots: true,
      // focusOnSelect: true,
      // centerMode: true,
      // dotsClass: 'slick-dots-News',
      arrows: false,
      autoplay: true,
      speed: 500,
      centerMode: true,
      autoplaySpeed: 3000,
      // pauseOnFocus: true,
      // pauseOnHover: true,
      // pauseOnDotsHover: false,
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
  
    return this.state.loading ? <h2>loading</h2> : (
      <div className={cx('news')}>
        <div className={cx('slider-wrapper')}>
          <Slider {...settings} className={cx('slider')}>
            {
              newsData.map((data, i) => (
                <div className={cx('page')} key={i}>
                  <a className={cx('image-wrapper')} href={data.url}>
                    <img
                      className={cx('image')}
                      onMouseOver={() => onMouseOver(i)}
                      onFocus={() => onMouseOver(i)}
                      
                      onBlur={() => onMouseOut(i)}
                      onMouseOut={() => onMouseOut(i)}
                      src={data.currentImg}
                      alt={`News${i}`}
                    />
                  </a>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    );

  }
}
export default News;