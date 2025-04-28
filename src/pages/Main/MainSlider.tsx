import { Link } from "react-router-dom";
import MainSliderImg1 from "../../assets/main_img1.jpg";
import MainSliderImg2 from "../../assets/main_img2.jpg";
import MainSliderImg3 from "../../assets/main_img3.jpg";

const MainSliderList = [
  {
    src: MainSliderImg1,
    path: "#",
    title: "여름맞이 신상",
    subtitle: "15% 쿠폰 혜택",
    brand: "무신사 스탠다드",
  },
  {
    src: MainSliderImg2,
    path: "#",
    title: "여름맞이 신상",
    subtitle: "15% 쿠폰 혜택",
    brand: "무신사 스탠다드",
  },
  {
    src: MainSliderImg3,
    path: "#",
    title: "여름맞이 신상",
    subtitle: "15% 쿠폰 혜택",
    brand: "무신사 스탠다드",
  },
];

export default function MainSlider() {
  return (
    <div style={{ display: "flex" }}>
      {MainSliderList.map((item, index) => (
        <Link
          style={{
            display: "flex",
            alignItems: "flex-end",
            width: "480px",
            height: "480px",
          }}
          key={index}
          to={item.path}
        >
          <img src={item.src} style={{ width: "480px", height: "480px" }} />
          <div
            style={{
              position: "absolute",
              height: "120px",
              marginLeft: "10px",
            }}
          >
            <p
              style={{
                color: "white",
                fontSize: "22px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {item.title}
              <br />
              {item.subtitle}
            </p>
            <p
              style={{
                color: "white",
                fontSize: "13px",
                fontWeight: "bold",
              }}
            >
              {item.brand}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
