import { Link } from "react-router-dom";
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
  return (
    <Root>
      {productList.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </Root>
  );
}
