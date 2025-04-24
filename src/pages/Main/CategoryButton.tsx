import { Link } from "react-router-dom";
import styled from "styled-components";
import Category_1 from "../../assets/category_1.jpg";
import Category_10 from "../../assets/category_10.jpg";
import Category_11 from "../../assets/category_11.jpg";
import Category_12 from "../../assets/category_12.jpg";
import Category_13 from "../../assets/category_13.jpg";
import Category_14 from "../../assets/category_14.png";
import Category_15 from "../../assets/category_15.png";
import Category_16 from "../../assets/category_16.png";
import Category_17 from "../../assets/category_17.png";
import Category_18 from "../../assets/category_18.jpg";
import Category_19 from "../../assets/category_19.png";
import Category_2 from "../../assets/category_2.jpg";
import Category_20 from "../../assets/category_20.png";
import Category_3 from "../../assets/category_3.jpg";
import Category_4 from "../../assets/category_4.jpg";
import Category_5 from "../../assets/category_5.png";
import Category_6 from "../../assets/category_6.png";
import Category_7 from "../../assets/category_7.jpg";
import Category_8 from "../../assets/category_8.jpg";
import Category_9 from "../../assets/category_9.jpg";

const Root = styled.div`
  display: flex;
  justify-content: center;
  height: 116px;
  padding: 16px;
  background-color: #f5f5f5;
  flex-wrap: wrap;
  gap: 8px;
`;

const CategoryButtonLink = styled(Link)`
  height: 40px;
  padding: 6px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: white;

  & img {
    width: 26px;
    height: 26px;
  }

  & span {
    margin-left: 8px;
  }
`;

const categoryList = [
  { src: Category_1, title: "인기 급상승", path: "/" },
  { src: Category_2, title: "르꼬그 데이", path: "/" },
  { src: Category_3, title: "아캄 × 송이송이", path: "/" },
  { src: Category_4, title: "K리그 × 산리오", path: "/" },
  { src: Category_5, title: "여성 여름 신상", path: "/" },
  { src: Category_6, title: "고 팀 무신사", path: "/" },
  { src: Category_7, title: "나이키 위크", path: "/" },
  { src: Category_8, title: "어린이날 선물", path: "/" },
  { src: Category_9, title: "여행 잡화 쿠폰", path: "/" },
  { src: Category_10, title: "오직 무신사 뷰티", path: "/" },
  { src: Category_11, title: "오프라인 웰컴데이", path: "/" },
  { src: Category_12, title: "어스 위크", path: "/" },
  { src: Category_13, title: "브랜드 위크", path: "/" },
  { src: Category_14, title: "타임세일", path: "/" },
  { src: Category_15, title: "체험단", path: "/" },
  { src: Category_16, title: "이벤트", path: "/" },
  { src: Category_17, title: "무신사 개업식", path: "/" },
  { src: Category_18, title: "무신사 매거진", path: "/" },
  { src: Category_19, title: "무신사 어스", path: "/" },
  { src: Category_20, title: "라이브", path: "/" },
];

export default function CategoryButton() {
  return (
    <Root>
      {categoryList.map((item, index) => (
        <CategoryButtonLink to={item.path} key={index}>
          <img src={item.src} alt="카테고리 이미지" />
          <span>{item.title}</span>
        </CategoryButtonLink>
      ))}
    </Root>
  );
}
