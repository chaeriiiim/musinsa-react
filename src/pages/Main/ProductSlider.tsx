import { Link } from "react-router-dom";
// import Slider from "react-slick";
import styled from "styled-components";
import Product_1 from "../../assets/product_1.webp";
import Product_2 from "../../assets/product_2.webp";

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

const productList = [
  {
    path: "/",
    img: Product_1,
    brand: "엄브로",
    productName: "클래식 윔업 바람막이 자켓 아이보리",
    per: "60%",
    price: "59,000원",
  },
  {
    path: "/",
    img: Product_2,
    brand: "엄브로",
    productName: "클래식 윔업 바람막이 자켓 아이보리",
    per: "60%",
    price: "59,000원",
  },
];

export default function ProductSlider() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidersToshow: 3,
  //   sliderToScroll: 1,
  // };
  return (
    <Root>
      {/* <Slider {...settings}> */}
      {productList.map((product, index) => (
        <Link to={product.path} key={index}>
          <ImgWrapper>
            <img src={product.img} alt="제품 사진" />
          </ImgWrapper>

          <ProductTitleWrapper>
            <ProductBrand>{product.brand}</ProductBrand>
            <ProductName>{product.productName}</ProductName>
            <div>
              <span
                style={{ fontSize: "13px", color: "red", fontWeight: "bold" }}
              >
                {product.per}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  marginLeft: "5px",
                  fontWeight: "bold",
                }}
              >
                {product.price}
              </span>
            </div>
          </ProductTitleWrapper>
        </Link>
      ))}
      {/* </Slider> */}
    </Root>
  );
}
