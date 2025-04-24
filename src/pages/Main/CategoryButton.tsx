import { Link } from "react-router-dom";
import styled from "styled-components";
import Category_1 from "../../assets/category_1.jpg";

const Root = styled.div`
  display: flex;
  justify-content: center;
  height: 116px;
  padding: 16px;
  background-color: #f5f5f5;
  flex-wrap: wrap;
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
  { src: Category_1, title: "테스트", path: "/" },
  { src: Category_1, title: "테스트2", path: "/" },
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
