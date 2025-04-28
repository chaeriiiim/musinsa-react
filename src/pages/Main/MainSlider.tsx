import MainSliderImg1 from "../../assets/main_img1.jpg";

export default function MainSlider() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <img src={MainSliderImg1} style={{ width: "480px", height: "480px" }} />
      <span
        style={{ position: "absolute", color: "white", marginBottom: "50px" }}
      >
        여름맞이
      </span>
    </div>
  );
}
