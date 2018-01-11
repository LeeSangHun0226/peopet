import React, { Component } from 'react';
import axios from 'axios';
import Scroll from 'react-scroll';
import Slider from 'react-slick';
import update from 'react-addons-update';
import styles from './Breeder.scss';
import classNames from 'classnames/bind';
import BreederList from '../../molecules/BreederList';
import Spinner from '../../atoms/Spinner';
import HomeTeplate from '../../templates/HomeTemplate';
import { fetchServerConfig } from '../../../config';
import HomeTemplate from '../../templates/HomeTemplate/HomeTemplate';
import BreederTitleImg from '../../../images/breeder-title.png';

const cx = classNames.bind(styles);

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
    window.addEventListener('scroll', this.handleScroll);
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
    window.removeEventListener('scroll', this.handleScroll);
  }

  

  render() {
    const { isSticked, dogListData } = this.state;
    const { history } = this.props;
    return this.state.loading ? 
      <Spinner loading={this.state.loading}/>
     : (
      <div className={cx('Breeder')}>
        <HomeTemplate
          breeder
          titleImage={BreederTitleImg}
          subTitle="건강한 강아지의 정보와<br/>전문 브리더들을 만나보세요!"
          bar         
        />
        <div className={cx('page')}>
          <div className={cx('content')}>
            {
              dogListData.map((data, i) => (
                <BreederList
                  key={i}
                  index={i}
                  titleImage={data.titleImage}
                  title={data.dogName}
                  description={data.description}
                  tag={data.tag}
                  id={data._id}
                  breederList={data.breederList}
                  history={history}
                />
              ))
            }
          </div>
        </div>
      </div>
  	);
  }
};


export default Breeder;
