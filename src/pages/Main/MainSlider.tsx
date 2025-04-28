import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import MainSliderImg1 from "../../assets/main_img1.jpg";
import MainSliderImg2 from "../../assets/main_img2.jpg";
import MainSliderImg3 from "../../assets/main_img3.jpg";
import MainSliderImg4 from "../../assets/main_img4.jpg";
import MainSliderImg5 from "../../assets/main_img5.jpg";
import MainSliderImg6 from "../../assets/main_img6.jpg";

const MainSliderWrapper = styled.div`
  position: relative;
  width: 480px;
  height: 480px;
`;

const MainSliderLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  width: 480px;
  height: 480px;
`;

const MainSliderImg = styled.img`
  width: 480px;
  height: 480px;
`;

const TitleWrapper = styled.div`
  position: absolute;
  height: 120px;
  margin-left: 10px;

  p:first-child {
    color: white;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
    line-height: 28px;
  }

  p:nth-child(2) {
    color: white;
    font-size: 13px;
  }
`;

const MainSliderList = [
  {
    src: MainSliderImg1,
    path: "#",
    title: "여름맞이 신상",
    subtitle: "15% 쿠폰 혜택",
    brand: "무신사 스탠다드",
  },
  {
    src: MainSliderImg2,
    path: "#",
    title: "인기 데님 특별전",
    subtitle: "최대 30% 할인",
    brand: "모드나인",
  },
  {
    src: MainSliderImg3,
    path: "#",
    title: "인기 아이템 모음",
    subtitle: "20% 쿠폰 혜택",
    brand: "시엔느",
  },
  {
    src: MainSliderImg4,
    path: "#",
    title: "여름맞이 신상 라이브",
    subtitle: "15% 쿠폰 혜택",
    brand: "엘무드",
  },
  {
    src: MainSliderImg5,
    path: "#",
    title: "하루 특가",
    subtitle: "최대 40% 할인",
    brand: "나이키",
  },
  {
    src: MainSliderImg6,
    path: "#",
    title: "라이브 최대 혜택",
    subtitle: "여성 여름 신상",
    brand: "페인오어플레져",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 100,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  arrows: false,
  draggable: true,
};

export default function MainSlider() {
  return (
    <Slider {...settings}>
      {MainSliderList.map((item, index) => (
        <MainSliderWrapper key={index}>
          <MainSliderLink to={item.path}>
            <MainSliderImg src={item.src} />
            <TitleWrapper>
              <p>
                {item.title}
                <br />
                {item.subtitle}
              </p>
              <p>{item.brand}</p>
            </TitleWrapper>
          </MainSliderLink>
        </MainSliderWrapper>
      ))}
    </Slider>
  );
}
