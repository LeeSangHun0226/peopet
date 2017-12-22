import React, { Component } from 'react';
import axios from 'axios';
import Scroll from 'react-scroll';
import Slider from 'react-slick';
import update from 'react-addons-update';
// import { scroller } from 'react-scroll'; //Imports scroller mixin, can use as scroller.scrollTo()
import styles from './Breeder.scss';
import classNames from 'classnames/bind';
import BreederList from '../../molecules/BreederList';
import Spinner from '../../atoms/Spinner';
// import BreederIntro from '../../molecules/BreederIntro'
// import breederLabrador from '../../../images/breeder-labrador.jpg';
// import breeder1 from '../../../images/breeder1.jpg';
// import HomeTemplate from '../../templates/HomeTemplate';
import arrowLeftImg from '../../../images/arrow-left.png';
import arrowRightImg from '../../../images/arrow-right.png';
// import breederHeaderImg from '../../../images/breeder-header.jpg';
import { fetchServerConfig } from '../../../config';

const cx = classNames.bind(styles);

var Link = Scroll.Link;
// var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
// var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <button
      className={cx('next-arrow')}
      onClick={onClick}
    >&gt;
    {/*}  
    <img src={arrowRightImg} alt="arrow-right" className={cx('arrow-img')}/>
  */}
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <button
      className={cx('prev-arrow')}
      onClick={onClick}
    >&lt;
    {/*}  
    <img src={arrowLeftImg} alt="arrow-left" className={cx('arrow-img')} />
  */}
    </button>
  );
}

class Breeder extends Component {

  state = {
    isSticked: false,
    dogListData: [],
    loading: true,
    isFirstActived: false,
    currentIndex: -1,
    perviousIndex: -1,
  }

  componentDidMount = function() {
    Events.scrollEvent.register("begin", function (to, element) {});
    Events.scrollEvent.register('end', function (to, element) {});
    window.addEventListener('scroll', this.handleScroll);
    scrollSpy.update();
    axios.get(`http://${fetchServerConfig.ip}:4000/api/dog`)
      .then((res) => {
        this.setState({
          dogListData: res.data,
          loading: false,
        })
      })
      .catch(err => console.log(err))
  }

  handleScroll = () => {
    const currentPosition = window.pageYOffset;
    const isSticked = currentPosition > 480 ? true : false;
    this.setState({
      isSticked: isSticked,
    });
  }

  handleSetActive = (e) => {
    const currentActiveIndex = this.state.dogListData.map(dog => dog._id).indexOf(e);
    if (!this.state.isFirstActived) {
      return this.setState({
        perviousIndex: currentActiveIndex,
        currentIndex: currentActiveIndex,
        isFirstActived: true,
        dogListData: update(
          this.state.dogListData,
          {
            [currentActiveIndex]: {
              active: {
                $set: true,
              }
            }
          }
        )
      })
    }
    const previousIndex = this.state.currentIndex;
    return this.setState({
      perviousIndex: previousIndex,
      currentIndex: currentActiveIndex,
      dogListData: update(
        this.state.dogListData,
        {
          [currentActiveIndex]: {
            active: {
              $set: true,
            }
          },
          [previousIndex]: {
            active: {
              $set: false,
            }
          }
        },
      )
    })
  }

  componentWillUnmount = function() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
    window.removeEventListener('scroll', this.handleScroll);
  }

  

  render() {
    const { isSticked, dogListData } = this.state;
    const { history } = this.props;
    const settings = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      dots: false,
      speed: 10,
      arrow: true,
      // pauseOnFocus: true,
      // pauseOnHover: true,
      pauseOnDotsHover: false,
      cssEase: 'linear',
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 1600,
        settings: {
          slidesToShow: 8,
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
    return this.state.loading ? 
      <Spinner loading={this.state.loading}/>
     : (
    // return(
      <div className={cx('breeder')}> 
        
        {/*}
        <BreederIntro breederIntroData={breederIntroData} />
        <HomeTemplate
          bar
          title="견종 대백과 사전"
          subTitle="다양한 견종의 특성을 파악하고 관련 전문 브리더를 찾아보세요"
        />
    */}
        <nav className={cx('navbar', { isSticked })}>
          <ul className={cx('nav')}>
            <Slider {...settings}>
              {
                dogListData.map(data => {
                  const { active } = data;
                  return (
                    <li className={cx('li')} key={data._id}>
                      <Link
                        className={cx('link', { active })}
                        activeClass="active"
                        to={`${data._id}`}
                        spy={true}
                        smooth={true}
                        duration={250}
                        offset={-70}
                        onClick={() => this.handleSetActive(data._id)}
                      >
                        {data.dogName}
                      </Link>
                    </li>
                  )
                })
              }
            </Slider>
          </ul>
        </nav>
        <div>
        {
          dogListData.map(data => (
            <Element key={data._id} name={`${data._id}`} className={cx('element')}>
              <BreederList
                titleImage={data.titleImage}
                title={data.dogName}
                description={data.description}
                tag={data.tag}
                index={data._id}
                breederList={data.breederList}
                history={history}
              />
            </Element>    
          ))
        }
        </div>
      </div>
	);
  }
};


export default Breeder;
