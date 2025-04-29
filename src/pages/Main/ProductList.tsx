import Product_1 from "../../assets/product_1.webp";
import Product_10 from "../../assets/product_10.webp";
import Product_2 from "../../assets/product_2.webp";
import Product_3 from "../../assets/product_3.webp";
import Product_4 from "../../assets/product_4.webp";
import Product_5 from "../../assets/product_5.webp";
import Product_6 from "../../assets/product_6.webp";
import Product_7 from "../../assets/product_7.webp";
import Product_8 from "../../assets/product_8.webp";
import Product_9 from "../../assets/product_9.webp";
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
    brand: "코닥",
    productName: "컬러라벨 크루 삭스 5PC",
    per: "",
    price: "34,900원",
  },
  {
    path: "/",
    img: Product_3,
    brand: "셀버린",
    productName: "크라이오써모 젤 슬리브 민트",
    per: "5%",
    price: "37,000원",
  },
  {
    path: "/",
    img: Product_4,
    brand: "호카",
    productName: "(여성) 카하 2 로우 고어텍스 - 블랙 /1123191-BBLC",
    per: "20%",
    price: "222,990원",
  },
  {
    path: "/",
    img: Product_5,
    brand: "파타고니아",
    productName: "테라비아 미니 힙 팩",
    per: "",
    price: "69,000원",
  },
  {
    path: "/",
    img: Product_6,
    brand: "오프그리드",
    productName: "OG 라이트 스타디움 자켓-네이비",
    per: "50%",
    price: "74,500원",
  },
  {
    path: "/",
    img: Product_7,
    brand: "다이나핏",
    productName: "OCEAN (오션) 반팔티_Black",
    per: "60%",
    price: "27,600원",
  },
  {
    path: "/",
    img: Product_8,
    brand: "아이더",
    productName: "[TOURING WALK]해파랑 T-450 C Black",
    per: "82%",
    price: "29,000원",
  },
  {
    path: "/",
    img: Product_9,
    brand: "스노우피크 어패럴",
    productName: "캠플 버킷햇 Dark Charcoal(S23SuCBH11)",
    per: "51%",
    price: "29,000원",
  },
  {
    path: "/",
    img: Product_10,
    brand: "파타고니아",
    productName: "멘즈 배기스 쇼츠 - 5인치 / 57022P5",
    per: "30%",
    price: "66,500원",
  },
];

export default function App() {
  return (
    <div>
      <ProductSlider productList={productList} />
    </div>
  );
}
