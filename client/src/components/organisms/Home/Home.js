import React, { Component } from 'react';
import styles from './Home.scss';
import classNames from 'classnames/bind';
import HomeTitle from '../../molecules/HomeTitle';
import HomeTemplate from '../../templates/HomeTemplate';
import HomeContentFlexBox from '../../molecules/HomeContentFlexBox';
import Partner from '../../molecules/Partner';
import Adoption from '../../molecules/Adoption';
import News from '../../molecules/News';
import TextBar from '../../atoms/TextBar';

import homeTitleImg from '../../../images/home-title.png';

import homeAdoptionImg from '../../../images/home-adoption.png';
import homeAdoptionMacImg1 from '../../../images/home-adoption-mac1.png';
import homeAdoptionSibaImg1 from '../../../images/home-adoption-siba1.png';
import homeAdoptionSibaImg2 from '../../../images/home-adoption-siba2.png';
import homeAdoptionSibaImg3 from '../../../images/home-adoption-siba3.png';
import homeAdoptionSibaImg4 from '../../../images/home-adoption-siba4.png';
import homeAdoptionLineImg from '../../../images/home-adoption-line.png';

import homeNewsImg from '../../../images/home-news.png';
import homeNewsCityImgDefault from '../../../images/home-news-city-default.png';
import homeNewsCityImgHover from '../../../images/home-news-city-hover.png';
import homeNewsDailyImgDefault from '../../../images/home-news-daily-default.png';
import homeNewsDailyImgHover from '../../../images/home-news-daily-hover.png';
import homeNewsFutureImgDefault from '../../../images/home-news-future-default.png';
import homeNewsFutureImgHover from '../../../images/home-news-future-hover.png';
import homeNewsOneImgDefault from '../../../images/home-news-one-default.png';
import homeNewsOneImgHover from '../../../images/home-news-one-hover.png';
import homeNewsSeoulImgDefault from '../../../images/home-news-seoul-default.png';
import homeNewsSeoulImgHover from '../../../images/home-news-seoul-hover.png';
import homeNewsVentureImgDefault from '../../../images/home-news-venture-default.png'
import homeNewsVentureImgHover from '../../../images/home-news-venture-hover.png';

import homeTogetherImg from '../../../images/home-together.png';

import homeBreederImg from '../../../images/home-breeder.png';

import homeWhatImg from '../../../images/home-what.png';

import homeUniverseImg from '../../../images/home-universe.png';

import homeServiceImg from '../../../images/home-service.png';
import homeServiceCallImg from '../../../images/home-service-call.png';
import homeServiceVisitImg from '../../../images/home-service-visit.png';
import homeServiceEducationImg from '../../../images/home-service-education.png';
import homeServicePriceImg from '../../../images/home-service-price.png';
import homeServiceAdoptionImg from '../../../images/home-service-adoption.png';
import homeServiceManagementImg from '../../../images/home-service-management.png';

import homeWhyImg from '../../../images/home-why.png';

import homeReviewImg from '../../../images/home-review.png';
import review1Img from '../../../images/home-review1.jpeg';
import review2Img from '../../../images/home-review2.jpeg';
import review3Img from '../../../images/home-review3.jpeg';
import review4Img from '../../../images/home-review4.jpeg';

import homeKakaoImg from '../../../images/home-kakao.png';

import homeDiaryImg from '../../../images/home-diary-img4.jpeg';

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

const reviewImages = [
  { img: review1Img, breed: '댕이', description: '강아지를 생각하는<br/>마음이 참 고마웠어요.' },
  { img: review2Img, breed: '망고', description: '아이가 자라온 환경을<br/>확인하니 신뢰가 생겼어요.' },
  { img: review3Img, breed: '아리', description: '투명한 시스템 체계가<br/>굉장히 매력적이었어요.' },
  { img: review4Img, breed: '복실이', description: '상담 단계에서부터 정말<br/>친절하고 감동이었어요.' },
];

const homeServiceImages = [
  { img: homeServiceCallImg, description: '전화' },
  { img: homeServiceVisitImg, description: '견사방문' },
  { img: homeServiceEducationImg, description: '보호자 교육' },
  { img: homeServicePriceImg, description: '예약금 납부' },
  { img: homeServiceAdoptionImg, description: '입양' },
  { img: homeServiceManagementImg, description: '사후관리' },
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

const adoptionData = [
  { img: homeAdoptionMacImg1, title: '맥코이힐', sex: '수컷', parent: '메이트&위닝', breed: '토이푸들', birthDate: '2017/10/20'},
  { img: homeAdoptionSibaImg1, title: '왕초켄넬', sex: '암컷', parent: '마사하루&우메미', breed: '시바이누', birthDate: '2017/10/27' },
  { img: homeAdoptionSibaImg2, title: '왕초켄넬', sex: '수컷', parent: '마사하루&우메미', breed: '시바이누', birthDate: '2017/10/27' },
  { img: homeAdoptionSibaImg3, title: '왕초켄넬', sex: '수컷', parent: '마사하루&우메미', breed: '시바이누', birthDate: '2017/10/27' },
  { img: homeAdoptionSibaImg4, title: '왕초켄넬', sex: '수컷', parent: '마사하루&우메미', breed: '시바이누', birthDate: '2017/10/27' },
]

const newsData = [
  // { defaultImg: homeNewsCenterImgDefault, currentImg: homeNewsCenterImgDefault, hoverImg: homeNewsCenterImgHover, url: '' },
  { defaultImg: homeNewsCityImgDefault, currentImg: homeNewsCityImgDefault, hoverImg: homeNewsCityImgHover, url: 'http://www.dosi.or.kr/%ea%b1%b7%ea%b3%a0%ec%8b%b6%ec%9d%80%eb%8f%84%ec%8b%9c-2017-%ea%b0%80%ec%9d%84%ed%98%b8/' },
  { defaultImg: homeNewsDailyImgDefault, currentImg: homeNewsDailyImgDefault, hoverImg: homeNewsDailyImgHover, url: 'http://www.dailyvet.co.kr/news/industry/75157' },
  // { defaultImg: homeNewsEverydayImgDefault, currentImg: homeNewsEverydayImgDefault, hoverImg: homeNewsEverydayImgHover, url: '' },
  { defaultImg: homeNewsFutureImgDefault, currentImg: homeNewsFutureImgDefault, hoverImg: homeNewsFutureImgHover, url: 'http://futurechosun.com/archives/29932' },
  { defaultImg: homeNewsOneImgDefault, currentImg: homeNewsOneImgDefault, hoverImg: homeNewsOneImgHover, url: 'http://news1.kr/articles/?2959902' },
  { defaultImg: homeNewsSeoulImgDefault, currentImg: homeNewsSeoulImgDefault, hoverImg: homeNewsSeoulImgHover, url: 'http://www.sedaily.com/NewsView/1OEQFDC1J3' },
  { defaultImg: homeNewsVentureImgDefault, currentImg: homeNewsVentureImgDefault, hoverImg: homeNewsVentureImgHover, url: 'http://www.venturesquare.net/756965' },
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
    // const customStyles = {
    //   content: {
    //     top: '50%',
    //     left: '47%',
    //     right: 'auto',
    //     bottom: 'auto',
    //     width: '90%',
    //     marginRight: '-50%',
    //     transform: 'translate(-50%, -50%)',
    //     padding: '3rem',
    //     borderWidth: 0,
    //     // backgroundColor: 'rgb(250,247,230)',
    //   },
    //   overlay: {
    //     position: 'fixed',
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     backgroundColor: 'rgba(255, 255, 255, 0.9)',
    //   },
    // }

    return (
      <div style={{ position: 'relative'}}>
        <HomeTitle image={homeTitleImg}/>
        <div className={cx('home')}>
        <HomeTemplate
          bar
          title="입양 예약 가능한 자견"
          subTitle={'브리더들을 통해 건강한 사회화를 한<br/>세상에 하나뿐인 가족을 입양하세요!'}
          titleImage={homeAdoptionImg}
          big
        >
          <Adoption
            adoptionData={adoptionData}
            line={homeAdoptionLineImg}
          />
        </HomeTemplate>
        <HomeTemplate
          bar
          title="페오펫의 다양한<br/>활동을 만나보세요."
          subTitle={'언론에 소개되는 페오펫을 만나보세요.<br/>페오펫의 다양한 소식, 활동들을 볼 수 있습니다.'}
          titleImage={homeNewsImg}
          middle
   
        >
          <News newsData={newsData} />
        </HomeTemplate>
        <HomeTemplate
          grey
          bar
          title="반려동물과 함께하는<br/>행복한 미래를 만듭니다."
          subTitle={"세상에는 수많은 반려 동물들이 살아가고 있습니다.<br/>그리고 무분별한 번식은 '강아지 공장'을 만들었습니다.<br/>페오펫은 '강아지 공장'대신 윤리적으로 번식을 하는<br/>전문 '브리더'에게 입양을 받는 올바른 문화를 지향합니다."}
          titleImage={homeTogetherImg}
        />
        <HomeTemplate
          titleImage={homeBreederImg}
          bar
          subTitle="단일 견종의 특성에 대한 이해를 바탕으로 견종의 질을 보존하며<br/>윤리적으로 종의 번식을 하는 반려견 전문인을 말합니다."
          wide
        />
        <HomeTemplate
          grey
          bar
          title="페오펫은 무엇을 해결하는가?"
          titleImage={homeWhatImg}
          subTitle={"브리더 입양문화를 통해 성숙한 반려문화를 만듭니다.<br/>'페오펫이 건전한 반려문화를 선도하겠습니다.'"}
        />
        <HomeTemplate
          bar
          bigImage
          title="세상에 영향력을 끼쳐라"
          titleImage={homeUniverseImg}
          subTitle={"우리가 하는 일이 세상에 선한 영향력을 미쳐<br/>큰 변화를 만들어낼 수 있음을 믿고 있습니다."}
        />
        <HomeTemplate
          bar
          title="우리의 서비스"
          subTitle="페오펫은 단순히 입양을 중개하는 것이 아닌<br/>입양을 문화로 만드는 서비스를 제공하고 있습니다."
          titleImage={homeServiceImg}
          big
          grey
        >
          <HomeContentFlexBox
            content="why"
            pc="3"
            tablet="2"
            images={homeServiceImages}
          />
        </HomeTemplate>
        <HomeTemplate
          bar
          titleImage={homeWhyImg}
          subTitle="가정분양이나 무분별한 번식장은<br/>해당견종의 유전형질을 고려하지 않은 번식으로 인해<br/>치명적인 질병의 발생 가능성이 높아지기 때문입니다."
          wide
        />
        <HomeTemplate
          titleImage={homeReviewImg}
          review
          middle
          bar
          title="가족이 된 아이들"
          subTitle="페오펫에서 가족을 입양한<br/>다양한 후기들을 만나보세요!"
        >
          <HomeContentFlexBox
            content="review"
            images={reviewImages}
            onClick={handleClick}
          />
        </HomeTemplate>
        <div>
          <a href="https://blog.naver.com/peopet/221118309091">
            <img src={homeDiaryImg} alt="home-diary-img" className={cx('home-diary-img')} />
          </a>
          </div>
          <TextBar
            title="좀더 빠른 상담을 원하시면 '플러스친구'를 추가해주세요."
            image={homeKakaoImg}
            description="페오펫"
            link="http://goto.kakao.com/@peopet"
          />
        <HomeTemplate
          // marginTop={0}
          short
          subTitle="페오펫은 폭넓은 제휴 서비스를 제공하고 있으며<br/>반려견과 견주의 교감을 위해 항상 고민하고 연구합니다."
        >
          <Partner images={partnerImages} />
        </HomeTemplate>
      </div>
    </div>
    );
  }
}

export default Home;
