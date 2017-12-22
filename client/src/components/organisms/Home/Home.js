import React, { Component } from 'react';
import Modal from 'react-modal';
import styles from './Home.scss';
import classNames from 'classnames/bind';
import HomeTitle from '../../molecules/HomeTitle';
import HomeReviewModal from '../../molecules/HomeReviewModal';
import HomeTemplate from '../../templates/HomeTemplate';
import AboutIntro from '../../molecules/AboutIntro';
import HomeContentFlexBox from '../../molecules/HomeContentFlexBox';
import Banner from '../../molecules/Banner';
import Partner from '../../molecules/Partner';

import homeIntroImg1 from '../../../images/home-intro1.png';
import homeIntroImg2 from '../../../images/home-intro2.png';
import homeIntroImg3 from '../../../images/home-intro3.png';
import homeIntroImg4 from '../../../images/home-intro4.png';

import review1Img from '../../../images/home-review1.jpeg';
import review2Img from '../../../images/home-review2.jpeg';
import review3Img from '../../../images/home-review3.jpeg';
import review4Img from '../../../images/home-review4.jpeg';

import serviceTitleImg from '../../../images/home-service-title.png';
import serviceImg1 from '../../../images/home-service1.png';
import serviceImg2 from '../../../images/home-service2.png';
import serviceImg3 from '../../../images/home-service3.png';
import serviceImg4 from '../../../images/home-service4.png';
import serviceImg5 from '../../../images/home-service5.png';
import serviceImg6 from '../../../images/home-service6.png';

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

import bannerImg from '../../../images/home-banner.jpeg';

const reviewImages = [
  // { img: review1Img, breed: '댕이', description: '여러 시바 켄넬들을 알아보다가 예쁜 아이를 찾게되어 견사에 방문했어요.<br/>마지막 헤어질 때 엄마 냄새를 기억하라고 손수건에 모견의 체취를 담아주시는 브리더님의 강아지를 생각하는 마음이 참 고마웠어요.'},
  // { img: review2Img, breed: '망고', description: '입양 전 샵에 방문하거나 블로그 검색을 해봐도 건강한 아이인지 확신하기 어려웠어요.<br/>페오펫의 빠른 상담과 직접 브리더를 방문하고 아이가 자라온 환경을 확인하고 나니 신뢰가 생겼어요.' },
  // { img: review3Img, breed: '아리', description: '10년 전 펫샵에서 분양받았는데, 공장견의 특성상 파보장염으로 인해 아이가 죽었어요.<br/>페오펫에서는 부모견과 브리더에 관해 전부 확인 가능한 시스템 체계가 굉장히 매력적이었어요.' },
  // { img: review4Img, breed: '복실이', description: '애견샵에서 잘못 입양 받아 마음 고생 많이 했는데 페오펫을 통해 정말 건강한 말티즈를 입양 받아서 좋아요.<br/>상담 단계에서부터 정말 친절하고 감동이었어요.'} ,
  { img: review1Img, breed: '댕이', description: '강아지를 생각하는<br/>마음이 참 고마웠어요.' },
  { img: review2Img, breed: '망고', description: '아이가 자라온 환경을<br/>확인하니 신뢰가 생겼어요.' },
  { img: review3Img, breed: '아리', description: '투명한 시스템 체계가<br/>굉장히 매력적이었어요.' },
  { img: review4Img, breed: '복실이', description: '상담 단계에서부터 정말<br/>친절하고 감동이었어요.' },
];

const whyImages = [
  { img: serviceImg1, description: '전화' },
  { img: serviceImg2, description: '견사방문' },
  { img: serviceImg3, description: '보호자 교육' },
  { img: serviceImg4, description: '예약금 납부' },
  { img: serviceImg5, description: '입양' },
  { img: serviceImg6, description: '사후관리' },
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
      <div style={{ position: 'relative'}}>
        <HomeTitle />
        <div className={cx('home')}>
        <AboutIntro
          title="반려동물과 함께하는<br/>행복한 미래를 만듭니다."
          subTitle={[
            {
              label: '',
              description: "세상에는 너무나 많은 반려 동물들이 우리와 함께 살아가고 있습니다.<br/>하지만 지금까지 우리는 충분히 반려동물을 맞이할 준비를 하지 못했습니다.<br/>그래서 우리는 입양의 단계가 가장 먼저 바뀌어야 한다고 생각했습니다.<br/>페오펫은 견종의 번식을 담당하는 전문적인 ‘브리더’로부터 입양받는<br/>성숙한 반려견 입양 문화를 만들기 위해 노력하고 있습니다.",
            },
            {
              label: "브리더란?",
              subDescription: "단일 견종의 특성에 대한 이해를 바탕으로 견종의 질을 보존하며<br/>윤리적으로 종의 번식을 하는 반려견 전문인을 말합니다."
            }
          ]}
          image={homeIntroImg1}
          position="right"
        />
        <AboutIntro
          title="페오펫은 무엇을 해결하는가?"
          image={homeIntroImg2}
          subTitle={[
            {
              label: '',
              description: "페오펫은 작은 움직임이 가지고 오는 큰 변화를 믿고 있습니다.<br/>강아지 공장의 문제 해결을하려고 합니다.<br/>"
            }
          ]}
          position="left"
          attribute="dog"
        />
        <AboutIntro
          title="세상에 영향력을 끼쳐라"
          image={homeIntroImg3}
          attribute="map"
          subTitle={[
            {
              label: '',
              description: "페오펫은 행동에 그 이상의 의미가 담길 수 있다고 생각합니다. 브리더를 통해 반려견을 입양하는 것은 강아지 공장의 문제를 해결하는 것에 큰 영향을 미칠 수 있습니다. 우리가 하는 일이 세상에 선한 영향력을 미쳐 큰 변화를 만들어낼 수 있음을 믿고 있습니다."
            }
          ]}
          position="right"
        />
        <AboutIntro
          title="페오펫의 사명"
          image={homeIntroImg4}
          subTitle={[
            {
              label: '',
              description: '전문 브리더들로부터 입양을 받는 성숙한 문화를 통하여 사람과 반려동물이 한 생명체로서 더불어 살아갈 수 있는 사회를 만들고자 노력합니다.'
            }
          ]}
          position="left"
          attribute="together"
        />
        <HomeTemplate
          bar
          subTitle="페오펫은 직접 견사들을 방문하며 해당 견종에<br/>전문 지식을 가지고 건강하게 강아지를 길러내는<br/>브리더분들과 협업을 하고 있습니다."
          titleImage={serviceTitleImg}
          point
        >
          <HomeContentFlexBox
            content="why"
            pc="3"
            tablet="2"
            images={whyImages}
          />
        </HomeTemplate>
        <HomeTemplate
          title="페오펫에서 입양한 사람들의 후기"
          point
        >
          <HomeContentFlexBox
            content="review"
            images={reviewImages}
            onClick={handleClick}
          />
        </HomeTemplate>
        <HomeTemplate
          marginTop={0}
        >
          <Banner image={bannerImg} />
        </HomeTemplate>
        <HomeTemplate
          marginTop={0}
          bar
          title="페오펫 x 제휴사"
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
    </div>
    );
  }
}

export default Home;
