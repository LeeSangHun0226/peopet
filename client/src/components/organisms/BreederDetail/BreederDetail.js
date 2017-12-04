import React, { Component } from 'react';
import axios from 'axios';
import Scroll from 'react-scroll';
import update from 'react-addons-update';
// import Lightbox from 'react-images';
// import Slider from 'react-slick';
import styles from './BreederDetail.scss';
import classNames from 'classnames/bind';
// import BreederList from '../../molecules/BreederList';
// import BreederIntro from '../../molecules/BreederIntro'
import HomeTemplate from '../../templates/HomeTemplate';
import FlexBox from '../../atoms/FlexBox';
import Button from '../../atoms/Button';
import { fetchServerConfig } from '../../../config';

// const baseUrl = 'https://s3.ap-northeast-2.amazonaws.com/peopet'


const cx = classNames.bind(styles);

// var Link = Scroll.Link;
// var Element = Scroll.Element;
var Events = Scroll.Events;
var scrollSpy = Scroll.scrollSpy;


class BreederDetail extends Component {

  state = {
    isSticked: false,
    data: {},
    loading: false,
    lightboxIsOpen: true,
    currentKannelImage: '',
    currentDogImage: '',
    previousKey: -1,
    currentKey: -1,
    selectFlag: false,
    activeNav: [
      {
        key: 0,
        isActive: false,
      },
      {
        key: 1,
        isActive: false,
      },
      {
        key: 2,
        isActive: false,
      }
    ]
  }

  componentDidMount = function() {
    Events.scrollEvent.register('begin', function (to, element) {});
    Events.scrollEvent.register('end', function (to, element) {});
    window.addEventListener('scroll', this.handleScroll);
    scrollSpy.update();
    const { id } = this.props.match.params;
    
    axios.get(`http://${fetchServerConfig.ip}:4000/api/breeder/${id}`)
      .then((res)=> {
        this.setState({
          data: res.data,
          currentKannelImage: res.data.kannelImage[0],
          currentDogImage: res.data.dogImage[0],
          loading: true,
        })
      })
    window.scroll(0, 0);
  }

  handleScroll = () => {
    const currentPosition = window.pageYOffset;
    const isSticked = currentPosition > 480 ? true : false;
    this.setState({
      isSticked: isSticked,
    });
  }

  componentWillUnmount = function() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
    window.removeEventListener('scroll', this.handleScroll);
  }

  changeCurrentKannelImage = (image) => {
    this.setState({
      currentKannelImage: image,
    })
  }

  changeCurrentDogImage = (image) => {
    this.setState({
      currentDogImage: image,
    })
  }

  onSelectNav = (i) => {
    if (!this.state.selectFlag) {
      this.setState({
        selectFlag: true,
        previousKey: i,
        currentKey: i,
        activeNav: update(
          this.state.activeNav,
          {
            [i]: {
              isActive: { $set: true },
            },
          }
        )
      })
    }

    if(this.state.previousKey === this.state.currentKey) {
      this.setState({
        currentKey: i, 
      });
      return;
    }

    

    if(this.state.selectFlag) {
      const { previousKey, currentKey } = this.state;
      console.log('이전',previousKey,'지금',currentKey)
      this.setState({
        previousKey: currentKey,
        currentKey: i,
        activeNav: update(
          this.state.activeNav,
          {
            [i]: {
              isActive: { $set: true },
            },
            [previousKey]: {
              isActive: { $set: false },
            }
          }
        )
      });
    }
  }

  render() {
    const {
      // isSticked,
      data,
      // activeNav
    } = this.state;
    // const breederIntroData = {
    //   image: data.breederImage,
    // }

    return !this.state.loading ? <h1>Loading</h1> : (
      <div className={cx('breederDetail')}>
      {/*}  
      <BreederIntro breederIntroData={breederIntroData} />
    
        <nav className={cx('navbar', { isSticked })}>
          <ul className={cx('nav')}>
            {
              navData.map((nav, i) => (
                <li className={cx('li')} key={i} style={activeNav[i].isActive ? { color: 'blue'} : { color: 'black' }}
                >
                  <Link
                    className={cx('a')}
                    activeClass="active"
                    to={nav.to}
                    spy={true}
                    smooth={true}
                    duration={250}
                    offset={-70}
                    onClick={() => this.onSelectNav(i)}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
        */}
          <div name={'breeder'} className={cx('element')}>
            <div className={cx('image-wrapper')}>
              <img src={data.breederImage} alt='breederImage' className={cx('breederImage')} />
            </div>
            <HomeTemplate
              bar
              title={`${data.breederName} 브리더(breeder)`}
              subTitle={data.breederDescription}
            />
            <FlexBox className={cx('question')}>
              <FlexBox className={cx('box')}>
                <p className={cx('title')}>
                  브리딩을 시작한 계기
                </p>
                { data.question_start.split('<br/>').map((text, i) => <p key={i} className={cx('description')}>{text}</p>) }
              </FlexBox>
              <FlexBox className={cx('box')}>
                <p className={cx('title')}>
                  브리딩을 하는 마인드
                </p>
                {data.question_mind.split('<br/>').map((text, i) => <p key={i} className={cx('description')}>{text}</p>)}
              </FlexBox>
              <FlexBox className={cx('box')}>
                <p className={cx('title')}>
                  강아지 관리
                </p>
                {data.dogWord.split('<br/>').map((text, i) => <p key={i} className={cx('description')}>{text}</p>)}
              </FlexBox>
              <FlexBox className={cx('box')}>
                <p className={cx('title')}>
                  예비견주에게 한마디
                </p>
                {data.question_word.split('<br/>').map((text, i) => <p key={i} className={cx('description')}>{text}</p>)}
              </FlexBox>
            </FlexBox>
          </div>
          <div name={'kannel'} className={cx('element')}>
            <div className={cx('kannel-image')}>
              <img className={cx('image')} src={this.state.currentKannelImage} alt="kannelImage"/>
              <FlexBox className={cx('image-dot')}>
              {
                data.kannelImage.map((image, i) => (
                  <Button breeder className={cx('dot')} key={i} onClick={() => this.changeCurrentKannelImage(image)}>
                    <img className={cx('image')} src={image} alt={`kannelImage ${i}`} />
                  </Button>
                ))
              }
              </FlexBox>
            </div>
          </div>
          <div name={'dog'} className={cx('element')}>
            <HomeTemplate
              bar
              title={`브리더가 말하는 ${data.kannelBreed}`}
              subTitle={data.dogWord}
            />
            <div className={cx('dog-description-wrapper')}>
              <h3 className={cx('title')}>이런 보호자분에게 어울린다!</h3>
              {data.dogDescription.split('<br/>').map((text, i) => <p key={i} className={cx('dog-description')}>{text}</p>)}
            </div>
            <div className={cx('kannel-image')}>
              <img className={cx('image')} src={this.state.currentDogImage} alt="dogImage" />
              <FlexBox className={cx('image-dot')}>
                {
                  data.dogImage.map((image, i) => (
                    <Button breeder className={cx('dot')} key={i} onClick={() => this.changeCurrentDogImage(image)}>
                      <img className={cx('image')} src={image} alt={`kannelImage ${i}`} />
                    </Button>
                  ))
                }
              </FlexBox>
            </div>
          </div>
      </div>
	);
  }
};


export default BreederDetail;
