import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";

const StyledSlider = styled(Slider)`
  .slick-list {
    margin: 0;
    padding: 0 !important; /* ← slick-list의 padding 없애야 함 */
  }

  .slick-track {
    margin: 0;
    display: flex;
    align-items: flex-start; /* ← 위아래 맞춰서 세워야 함 */
  }

  .slick-slide {
    padding: 0 !important;
    margin: 0 !important;
    width: 260px !important;
  }
`;

const Root = styled.div`
  height: 402px;
  width: 100%;
  background-color: #f5f5f5;
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const SlideWrapper = styled.div`
  width: 260px;
`;

const ImgWrapper = styled.div`
  height: 312px;
  width: 260px;
  background-color: #e2e2e2;

  & img {
    width: 260px;
    height: 312px;
  }
`;

const ProductTitleWrapper = styled.div`
  height: 90px;
  width: 260px;
  line-height: 7px;
  padding: 8px;
`;

const ProductBrand = styled.p`
  font-size: 11px;
  font-weight: bold;
`;

const ProductName = styled.p`
  font-size: 13px;
`;

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  autoplay: false,
  arrows: true,
  draggable: true,
};

const ProductItem = ({
  product,
}: {
  product: {
    img: string;
    brand: string;
    productName: string;
    per: string;
    price: string;
    path: string;
  };
}) => (
  <Link to={product.path}>
    <ImgWrapper>
      <img src={product.img} alt="제품 사진" />
    </ImgWrapper>

    <ProductTitleWrapper>
      <ProductBrand>{product.brand}</ProductBrand>
      <ProductName>{product.productName}</ProductName>
      <div>
        <span style={{ fontSize: "13px", color: "red", fontWeight: "bold" }}>
          {product.per}
        </span>
        <span
          style={{ fontSize: "13px", marginLeft: "5px", fontWeight: "bold" }}
        >
          {product.price}
        </span>
      </div>
    </ProductTitleWrapper>
  </Link>
);

export default function ProductSlider({
  productList,
}: {
  productList: {
    path: string;
    img: string;
    brand: string;
    productName: string;
    per: string;
    price: string;
  }[];
}) {
  const isSlider = productList.length > 5;
  return (
    <Root>
      {isSlider ? (
        <StyledSlider {...settings}>
          {productList.map((product, index) => (
            <SlideWrapper key={index}>
              <ProductItem product={product} />
            </SlideWrapper>
          ))}
        </StyledSlider>
      ) : (
        <FlexWrapper>
          {productList.map((product, index) => (
            <SlideWrapper key={index}>
              <ProductItem product={product} />
            </SlideWrapper>
          ))}
        </FlexWrapper>
      )}
    </Root>
  );
}
