import { Link } from "react-router-dom";
import styled from "styled-components";
import Product_1 from "../../assets/product_1.webp";

const Root = styled.div`
  height: 402px;
  width: 100%;
  background-color: #f5f5f5;
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
];

export default function ProductSlider() {
  return (
    <Root>
      {productList.map((product, index) => (
        <Link to={product.path} key={index}>
          <div
            style={{
              height: "312px",
              width: "260px",
              backgroundColor: "#E2E2E2",
            }}
          >
            <img
              src={product.img}
              style={{ width: "260px", height: "312px" }}
            />
          </div>

          <div
            style={{
              height: "90px",
              width: "260px",
              lineHeight: "7px",
              padding: "8px",
            }}
          >
            <p style={{ fontSize: "11px", fontWeight: "bold" }}>
              {product.brand}
            </p>
            <p style={{ fontSize: "13px" }}>{product.productName}</p>
            <div style={{}}>
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
          </div>
        </Link>
      ))}
    </Root>
  );
}
