import styled from "styled-components";
import Dropdown from "./DropdownButton";

const FooterWrapper = styled.footer`
  width: 100%;
  // height: 366px;
  background-color: #f0f0f0;
  padding: 15px 0px 72px 0px;
  display: flex;
  flex-direction: column;
`;

const FooterButtonWrapper = styled.div`
  height: 62px;
  margin: 0px 16px;
  padding: 5px 0px 24px 0px;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #e6e6e6;
    margin: 24px auto;
  }
`;

const FooterButton = styled.button`
  height: 28px;
  padding: 0px 10px;
  background-color: #8a8a8a1a;
  color: #666666;
  margin-right: 5px;
`;

const buttonList = [
  { label: "MUSINSA", path: "/" },
  { label: "BEAUTY", path: "/" },
  { label: "PLAYER", path: "/" },
  { label: "OUTLET", path: "/" },
  { label: "BOUTIQUE", path: "/" },
  { label: "SNAKERS", path: "/" },
  { label: "KIDS", path: "/" },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterButtonWrapper>
        {buttonList.map((item, index) => (
          <FooterButton key={index}>{item.label}</FooterButton>
        ))}
      </FooterButtonWrapper>
      <Dropdown />

      <div
        style={{
          padding: "0px 16px",
          // marginBottom: "5px",
          marginTop: "10px",
        }}
      >
        <p style={{ color: "#666666", fontSize: "13px", margin: "0px" }}>
          @ MUSINSA ALL RIGHTS RESERVED
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            height: "18px",
            marginTop: "10px",
          }}
        >
          <a href="#" style={{ color: "#666666", fontSize: "13px" }}>
            개인정보처리방침
          </a>
          <p style={{ color: "#666666" }}>·</p>
          <a href="#" style={{ color: "#666666", fontSize: "13px" }}>
            이용약관
          </a>
          <p style={{ color: "#666666" }}>·</p>
          <a href="#" style={{ color: "#666666", fontSize: "13px" }}>
            결제대행 위탁사
          </a>
        </div>
      </div>
    </FooterWrapper>
  );
}
