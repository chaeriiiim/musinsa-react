import CategoryButton from "./CategoryButton";
import MainSlider from "./MainSlider";
import ProductSlider from "./ProductSlider";
import TitleSection from "./TitleSection";

export default function Main() {
  return (
    <>
      <MainSlider />
      <CategoryButton />
      <TitleSection
        link="#"
        title="스포츠 종목 아이템 추천"
        subtitle="등산/아웃도어"
      />
      <ProductSlider />
    </>
  );
}
