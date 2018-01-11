import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import blogImg from '../../../images/footer-blog.png';
import instaImg from '../../../images/footer-insta.png';
import facebookImg from '../../../images/footer-facebook.png';
import chromeImg from '../../../images/footer-chrome.png';
import kakaoImg from '../../../images/footer-kakao.png';

const cx = classNames.bind(styles);

const Footer = ({
  onLoginButtonClick,
  user,
  solid,
  authed,
}) => {
  return (
    <div className={cx('footer')}>
      <div className={cx('info-wrapper')}>
        <div className={cx('img-wrapper')}>
          <a href="http://blog.naver.com/peopet">
            <img className={cx('img')} src={blogImg} alt="blogImg" />
          </a>
          <a href="https://www.facebook.com/peopleNpet">
            <img className={cx('img')} src={facebookImg} alt="instaImg" />
          </a>
          <a href="https://www.instagram.com/peo_pet/">
            <img className={cx('img')} src={instaImg} alt="facebookImg" />
          </a>
        </div>
        <p className={cx('info-title')}>365일 언제나 문의 가능합니다.</p>
        <div className={cx('kakao')}>
          <a href="http://goto.kakao.com/@peopet">
            <img className={cx('img')} src={kakaoImg} alt="kakaoImg" />
          </a>
          <p className={cx('info-title')}>카카오톡ID '페오펫'으로 문의사항을 보내주세요.</p>
        </div>
        <p className={cx('info-sub')}>사업자등록번호: 354-88-00899 | 법인명: (주)코스모스이펙트 | 대표자: 최현일</p>
        <p className={cx('info-sub')}>통신판매업 신고: 2017-서울강남-04764호</p>
        <p className={cx('info-sub')}>주소: 서울 강남구 논현로98길 28(역삼동 671) | 시티빌딩 유니버스점 B1</p>
        <p className={cx('info-sub')}>고객문의:010-7551-1669</p>
        <p className={cx('info-sub')}>&#9400; 2017. Peopet, Inc. All Rights Reserved</p>
        <br/>
        <div className={cx('chrome-wrapper')}>
          <img className={cx('chrome')} src={chromeImg} alt="chromeImg" />
          <p className={cx('text')}>이 홈페이지는 Chrome에 최적화 되어 있습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
