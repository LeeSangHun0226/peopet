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

import review1Img from '../../../images/review1.jpg';
import review2Img from '../../../images/review2.jpg';
import review3Img from '../../../images/review3.jpg';
import review4Img from '../../../images/review4.jpg';

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
  { img: review1Img, owner: '김비숑', breed: '비숑', breeder: '정주희', description: '페오펫을 통해서 분양받으니 정말 안심이 되었어요.\n특히 사회화가 잘 되어있어서 그런지 굉장히 다른 강아지들과 친하게 지낼 줄 알더군요.\n*\n더 좋았던 건 자세한 브리더님의 안내를 통해서 앞으로 어떻게 길러야할 지 방향을 알 수 있다는 점이에요.\n한마리 한마리 정성스럽게 관리하시는 브리더님도 정말 믿음직스럽습니다.' },
  { img: review2Img, owner: '김비숑', breed: '비숑', breeder: '정주희', description: '페오펫을 통해서 분양받으니 정말 안심이 되었어요.\n특히 사회화가 잘 되어있어서 그런지 굉장히 다른 강아지들과 친하게 지낼 줄 알더군요.\n*\n더 좋았던 건 자세한 브리더님의 안내를 통해서 앞으로 어떻게 길러야할 지 방향을 알 수 있다는 점이에요.\n한마리 한마리 정성스럽게 관리하시는 브리더님도 정말 믿음직스럽습니다.' },
  { img: review3Img, owner: '김비숑', breed: '비숑', breeder: '정주희', description: '페오펫을 통해서 분양받으니 정말 안심이 되었어요.\n특히 사회화가 잘 되어있어서 그런지 굉장히 다른 강아지들과 친하게 지낼 줄 알더군요.\n*\n더 좋았던 건 자세한 브리더님의 안내를 통해서 앞으로 어떻게 길러야할 지 방향을 알 수 있다는 점이에요.\n한마리 한마리 정성스럽게 관리하시는 브리더님도 정말 믿음직스럽습니다.' },
  { img: review4Img, owner: '김비숑', breed: '비숑', breeder: '정주희', description: '페오펫을 통해서 분양받으니 정말 안심이 되었어요.\n특히 사회화가 잘 되어있어서 그런지 굉장히 다른 강아지들과 친하게 지낼 줄 알더군요.\n*\n더 좋았던 건 자세한 브리더님의 안내를 통해서 앞으로 어떻게 길러야할 지 방향을 알 수 있다는 점이에요.\n한마리 한마리 정성스럽게 관리하시는 브리더님도 정말 믿음직스럽습니다.' },
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
          title="페오펫X브리더"
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
