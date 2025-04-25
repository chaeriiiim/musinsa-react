import Product_1 from "../../assets/product_1.webp";

export default function ProductSlider() {
  return (
    <div style={{ height: "402px", width: "100%", backgroundColor: "#F5F5F5" }}>
      <div
        style={{ height: "312px", width: "260px", backgroundColor: "#E2E2E2" }}
      >
        <img src={Product_1} style={{ width: "260px", height: "312px" }} />
      </div>

      <div
        style={{
          height: "90px",
          width: "260px",
          lineHeight: "7px",
          padding: "8px",
        }}
      >
        <p style={{ fontSize: "11px", fontWeight: "bold" }}>엄브로</p>
        <p style={{ fontSize: "13px" }}>클래식 윔업 바람막이 자켓 아이보리</p>
        <div style={{}}>
          <span style={{ fontSize: "13px", color: "red", fontWeight: "bold" }}>
            60%
          </span>
          <span
            style={{ fontSize: "13px", marginLeft: "5px", fontWeight: "bold" }}
          >
            59,000원
          </span>
        </div>
      </div>
    </div>
  );
}
