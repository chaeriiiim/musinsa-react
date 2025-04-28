import Product_1 from "../../assets/product_1.webp";
import Product_2 from "../../assets/product_2.webp";
import ProductSlider from "./ProductSlider";

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
  {
    path: "/",
    img: Product_2,
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
  {
    path: "/",
    img: Product_2,
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
  {
    path: "/",
    img: Product_2,
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
  {
    path: "/",
    img: Product_2,
    brand: "엄브로",
    productName: "클래식 윔업 바람막이 자켓 아이보리",
    per: "60%",
    price: "59,000원",
  },
];

export default function App() {
  return (
    <div>
      <ProductSlider productList={productList} />
    </div>
  );
}
