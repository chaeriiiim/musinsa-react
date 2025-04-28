import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";

const Root = styled.div`
  height: 402px;
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
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
  dots: false, // 아래 점 표시 없애기
  infinite: false, // 마지막 가면 멈추기 (반복 안함)
  speed: 500, // 슬라이드 넘어가는 속도
  slidesToShow: 1, // 한 화면에 5개 보여주기
  slidesToScroll: 3, // 한 번 클릭할 때 1개씩 이동
  autoplay: false, // 자동으로 넘어가지 않게
  arrows: true, // 좌우 화살표 보여주기 (기본 true인데 혹시 몰라서 추가)
  draggable: true, // 마우스로 드래그해서 넘기기
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
  <Slider {...settings}>
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
  </Slider>
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
  return (
    <Root>
      {productList.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </Root>
  );
}
