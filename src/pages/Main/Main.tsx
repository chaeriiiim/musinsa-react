import styled from "styled-components";
import Button from "../../components/common/button";
import CategoryButton from "./CategoryButton";
import MainSlider from "./MainSlider";
import ProductList from "./ProductList";
import TitleSection from "./TitleSection";

const Root = styled.div`
  background-color: #f5f5f5;
`;

export default function Main() {
  return (
    <Root>
      <MainSlider />
      <CategoryButton />
      <TitleSection
        link="#"
        title="스포츠 종목 아이템 추천"
        subtitle="등산/아웃도어"
      />
      <ProductList />
      <Button />
    </Root>
  );
}
