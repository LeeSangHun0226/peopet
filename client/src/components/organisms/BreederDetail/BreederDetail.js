import React, { Component } from 'react';
import axios from 'axios';
import Scroll from 'react-scroll';
import update from 'react-addons-update';
import styles from './BreederDetail.scss';
import classNames from 'classnames/bind';
import Spinner from '../../atoms/Spinner';
import HomeTemplate from '../../templates/HomeTemplate';
import FlexBox from '../../atoms/FlexBox';
import Button from '../../atoms/Button';
import DetailInfo from '../../molecules/DetailInfo';
import Copyright from '../../atoms/Copyright';
import { fetchServerConfig } from '../../../config';
import detailStartImg from '../../../images/detail-start.png';
import detailMindImg from '../../../images/detail-mind.png';
import detailFutureImg from '../../../images/detail-future.png';
import detailCopyrightImg from '../../../images/detail-copyright.png';

const cx = classNames.bind(styles);

class BreederDetail extends Component {

  state = {
    data: [],
    loading: true,
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;
    axios.get(`http://${fetchServerConfig.ip}:4000/api/breeder/${id}`)
      .then((res) => {
        this.setState({
          data: res.data,
          loading: false,
        })
      })
      .catch(err => {
        alert('잘못된 요청입니다.')
        return window.location.href='http://peopet.co.kr';
      }
      )
  }

  render() {
    const { loading } = this.state;
    const {
      breederDescription,
      breederImage,
      breederName,
      dogDescription,
      dogImage,
      dogWord,
      nameImage,
      kannelBreed,
      kannelDescription,
      kannelImage,
      kannelLocation,
      kannelManage,
      kannelName,
      question_manage,
      question_mind,
      question_start,
      question_word,
    } = this.state.data;
    return loading ? <Spinner /> : (
      <div className={cx('BreederDetail')} >
        <div className={cx('page')}>
          <p className={cx('location')}>HOME &gt; BREEDER &gt; <b>{kannelBreed}</b></p>
          <DetailInfo
            breederDescription={breederDescription}
            breederImage={breederImage}
            breederName={breederName}
            dogImage={dogImage}
            dogDescription={dogDescription}
            kannelBreed={kannelBreed}
            kannelName={kannelName}
          />

          {/* <p className={cx('location')}>관련 견종 추천 브리더</p> */}
          <p className={cx('location')}>브리더 인터뷰</p>
          <div className={cx('contents')}>
            <div className={cx('content')}>
              <HomeTemplate
                titleImage={detailMindImg}
                subTitle={question_mind}
                detail
              />
              <HomeTemplate
                titleImage={detailStartImg}
                subTitle={question_start}
                detail
              />
              <HomeTemplate
                titleImage={detailFutureImg}
                subTitle={question_word}
                detail
              />
            </div>
          </div>
          <img className={cx('name-image')} src={nameImage} alt='name-img' />
          <p className={cx('location')}>견사</p>
          <div className={cx('contents')}>
            <div className={cx('content')}>
              {
                kannelImage.map((image, i) => {
                  return (
                    <img className={cx('image')} src={image} key={i} alt={`kannel-img-${i}`} />
                  )
                })
              }
              {
                dogImage.map((image, i) => {
                  return (
                    <img className={cx('image')} src={image} key={i} alt={`kannel-img-${i}`} />
                  )
                })
              }
              <Copyright
                image={detailCopyrightImg}
                text={'해당 저작물은 페오펫의 소유이므로<br/>당사의 허가없이 변경하거나 저작물을 이용한<br/>2차적 저작물 제작을 금합니다.'}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default BreederDetail;
