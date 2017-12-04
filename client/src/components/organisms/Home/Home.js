import React, { Component } from 'react';
import Modal from 'react-modal';
import styles from './Home.scss';
import classNames from 'classnames/bind';
import HomeTitle from '../../molecules/HomeTitle';
import HomeReviewModal from '../../molecules/HomeReviewModal';
import HomeTemplate from '../../templates/HomeTemplate';
import HomeContentFlexBox from '../../molecules/HomeContentFlexBox';
import Banner from '../../molecules/Banner';
import Partner from '../../molecules/Partner';

import breeder1Img from '../../../images/breeder1.jpg';
import breeder2Img from '../../../images/breeder2.jpg';
import breeder3Img from '../../../images/breeder3.jpg';
import breeder4Img from '../../../images/breeder4.jpg';

import review1Img from '../../../images/home-review1.jpg';
import review2Img from '../../../images/home-review2.png';
import review3Img from '../../../images/home-review3.jpg';
import review4Img from '../../../images/home-review4.jpg';

import why1Img from '../../../images/why_icon1.png';
import why2Img from '../../../images/why_icon2.png';
import why3Img from '../../../images/why_icon3.png';
import why4Img from '../../../images/why_icon4.png';

import partner1Img from '../../../images/partner1.png';
import partner2Img from '../../../images/partner2.png';
import partner3Img from '../../../images/partner3.png';
import partner4Img from '../../../images/partner4.png';
import partner5Img from '../../../images/partner5.png';
import partner6Img from '../../../images/partner6.png';
import partner7Img from '../../../images/partner7.png';
import partner8Img from '../../../images/partner8.png';
import partner9Img from '../../../images/partner9.png';
import partner10Img from '../../../images/partner10.png';

import bannerImg from '../../../images/home_banner.jpg';

const breederImages = [
  { img: breeder1Img, description: '깨끗한 환경'},
  { img: breeder2Img, description: '부모견 확인' },
  { img: breeder3Img, description: '건강한 사회화' },
  { img: breeder4Img, description: '전문적인 케어' },
];

const reviewImages = [
  { img: review1Img, breed: '복실이', description: '애견샵에서 잘못 입양 받아 마음 고생 많이 했는데 페오펫을 통해 정말 건강한 말티즈를 입양 받아서 좋아요.<br/>상담 단계에서부터 정말 친절하고 감동이었어요.' },
  { img: review2Img, breed: '댕이', description: '여러 시바 켄넬들을 알아보다가 예쁜 아이를 찾게되어 견사에 방문했어요.<br/>마지막 헤어질 때 엄마 냄새를 기억하라고 손수건에 모견의 체취를 담아주시는 브리더님의 강아지를 생각하는 마음이 참 고마웠어요.' },
  { img: review3Img, breed: '아리', description: '10년 전 펫샵에서 분양받았는데, 공장견의 특성상 파보장염으로 인해 아이가 죽었어요.<br/>페오펫에서는 부모견과 브리더에 관해 전부 확인 가능한 시스템 체계가 굉장히 매력적이었어요.' },
  { img: review4Img, breed: '망고', description: '입양 전 샵에 방문하거나 블로그 검색을 해봐도 건강한 아이인지 확신하기 어려웠어요.<br/>페오펫의 빠른 상담과 직접 브리더를 방문하고 아이가 자라온 환경을 확인하고 나니 신뢰가 생겼어요.' },
];

const whyImages = [
  { img: why1Img, description: '투명한 유통구조' },
  { img: why2Img, description: '건강한 강아지' },
  { img: why3Img, description: '믿음직한 사후관리' },
  { img: why4Img, description: '거품비용 제거' },
]

const partnerImages = [
  { img: partner1Img },
  { img: partner2Img },
  { img: partner3Img },
  { img: partner4Img },
  { img: partner5Img },
  { img: partner6Img },
  { img: partner7Img },
  { img: partner8Img },
  { img: partner9Img },
  { img: partner10Img },
]

const cx = classNames.bind(styles);

class Home extends Component {

  state = {
    modalIsOpen: false,
    review: {},
  }

  handleClick = (review) => {
    this.setState({
      modalIsOpen: true,
      review,
    })
  }

  render() {
    const { handleClick } = this;
    const customStyles = {
      content: {
        top: '50%',
        left: '47%',
        right: 'auto',
        bottom: 'auto',
        width: '90%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '3rem',
        borderWidth: 0,
        // backgroundColor: 'rgb(250,247,230)',
      },
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      },
    }

    return (
      <div className={cx('home')}>
        <HomeTitle />
        <HomeTemplate
          bar
          title="브리더(Breeder)란?"
          subTitle="견종의 특성에 대한 이해를 바탕으로, 견종의 질을 보존하고<br/>개체의 번식을 위해 전문적으로 종의 번식을 하는 사람"
        >
          <HomeContentFlexBox
            content="breeder"
            images={breederImages}
          />
        </HomeTemplate>
        {/*}
      <HomeTemplate
        bar
        title="HEALTY DOG STORY"
        subTitle="건강한 사회화를 통해 자란 아이들은 다릅니다.\n 행복한 환경에서 건강하게 자란 아이들을 직접 보러오세요."
      >
      </HomeTemplate>
*/}
        <HomeTemplate
          bar
          title="왜 페오펫인가요?"
          subTitle="페오펫은 강아지 공장에서 고통받고 있는<br/> 모든 강아지들이 행복해지는 날을 그립니다. "
        >
          <HomeContentFlexBox
            content="why"
            images={whyImages}
          />
        </HomeTemplate>
        <HomeTemplate>
          <Banner image={bannerImg} />
        </HomeTemplate>
        <HomeTemplate
          bar
          title="페오펫 x 브리더"
          subTitle="건강한 아이들의 입양 후기를 찾아보세요!"
        >
          <HomeContentFlexBox
            content="review"
            images={reviewImages}
            onClick={handleClick}
          />
        </HomeTemplate>
        <HomeTemplate
          bar
          title="페오펫X제휴사"
          subTitle="페오펫을 통해 소중한 가족을 분양받고<br/>수많은 제휴사를 통해 더 많은 혜택을 누리세요!"
        >
          <Partner images={partnerImages} />
        </HomeTemplate>
        <Modal
          isOpen={this.state.modalIsOpen}
          style={customStyles}
          shouldCloseOnOverlayClick={false}
          contentLabel="Example Modal"  
        >
          <HomeReviewModal review={this.state.review} />
        </Modal>
      </div>
    );
  }
}

export default Home;
