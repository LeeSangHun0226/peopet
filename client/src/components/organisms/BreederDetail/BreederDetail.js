import React, { Component } from 'react';
import axios from 'axios';
import ImageList from '../../atoms/ImageList';
import styles from './BreederDetail.scss';
import classNames from 'classnames/bind';
import Spinner from '../../atoms/Spinner';
import HomeTemplate from '../../templates/HomeTemplate';
import DetailInfo from '../../molecules/DetailInfo';
import Copyright from '../../atoms/Copyright';
import { fetchServerConfig } from '../../../config';
import detailStartImg from '../../../images/detail-start.png';
import detailMindImg from '../../../images/detail-mind.png';
import detailFutureImg from '../../../images/detail-future.png';
import detailCopyrightImg from '../../../images/detail-copyright.png';
import detailKakaoImg from '../../../images/detail-kakao.png';
import detailVaccinImg from '../../../images/detail-vaccin.png';
import puppyTitleImg from '../../../images/puppy-title.png';
import InfoBox from '../../atoms/InfoBox/InfoBox';

const cx = classNames.bind(styles);

class BreederDetail extends Component {

  state = {
    data: [],
    loading: true,
    description: '',
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;
    const { description } = this.props.location.state;    
    axios.get(`http://${fetchServerConfig.ip}:4000/api/breeder/${id}`)
      .then((res) => {
        this.setState({
          data: res.data,
          loading: false,
          description,
        })
      })
      .catch(err => {
        alert('잘못된 요청입니다.')
        return window.location.href='http://peopet.co.kr';
      }
      )
  }

  render() {
    const {
      loading,
      description,
    } = this.state;
    const {
      breederDescription,
      breederImage,
      breederName,
      // dogDescription,
      dogImage,
      // dogWord,
      nameImage,
      kannelBreed,
      // kannelDescription,
      kannelImage,
      // kannelLocation,
      // kannelManage,
      kannelName,
      // question_manage,
      question_mind,
      question_start,
      question_word,
      puppyImage,
    } = this.state.data;
    console.log(puppyImage)
    return loading ? <Spinner /> : (
      <div className={cx('BreederDetail')} >
        <div className={cx('page')}>
          <p className={cx('location')}>HOME &gt; BREEDER &gt; <b>{kannelBreed}</b></p>
          <DetailInfo
            breederDescription={breederDescription}
            breederImage={breederImage}
            breederName={breederName}
            dogImage={dogImage}
            dogDescription={description}
            kannelBreed={kannelBreed}
            kannelName={kannelName}
            image={detailKakaoImg}
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
          <ImageList
            location="견사"
            images={kannelImage}
            nameImage={nameImage}
          />
          <ImageList
            location="강아지"
            images={dogImage}
          />
          {
            puppyImage.length === 0
              ? false
              : <ImageList
                  location="자견정보"
                  images={puppyImage}
                  nameImage={puppyTitleImg}
                  image
                >
                  <InfoBox
                    title="예방접종 현황"
                    image={detailVaccinImg}
                  />
                  <InfoBox
                    title="주의사항"
                    description="브리더에게 입양하는 강아지는<br/>강아지 공장에서 태어난 아이들 보다 건강하고,<br/>유전병이 발병할 확률이 현저히 낮습니다.<br/>&nbsp;<br/>하지만 잔디밭과 같은 환경 속에서<br/>부모견과 함께 사회화를 겪으며 자라는 강아지들의 특성상<br/>원충감염과 같은 질병은 나타날 수 있습니다.<br/>&nbsp;<br/>강아지가 묽은 변을 지속적으로 보거나 체중이 감소할 경우<br/>탈수를 방지하기 위해 이온음료 혹은 요거트를 먹이며<br/>경과를 지켜보시면서 가까운 병원 혹은<br/>페오펫 제휴 병원을 찾아주세요."
                  />
                </ImageList>

          }
            <Copyright
              image={detailCopyrightImg}
              text={'해당 저작물은 페오펫의 소유이므로<br/>당사의 허가없이 변경하거나 저작물을 이용한<br/>2차적 저작물 제작을 금합니다.'}
            />
        </div>
      </div>
    )
  }

}
export default BreederDetail;
