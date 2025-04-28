import MainSliderImg1 from "../../assets/main_img1.jpg";

export default function MainSlider() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        width: "480px",
        height: "480px",
      }}
    >
      <img src={MainSliderImg1} style={{ width: "480px", height: "480px" }} />
      <div style={{ position: "absolute", height: "120px" }}>
        <p
          style={{
            color: "white",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          여름맞이 신상
          <br />
          15% 쿠폰 혜택
        </p>
        <p
          style={{
            color: "white",
            fontSize: "13px",
            fontWeight: "bold",
          }}
        >
          무신사 스탠다드
        </p>
      </div>
    </div>
  );
}
