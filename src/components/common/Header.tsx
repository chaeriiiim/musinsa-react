import { Link } from "react-router-dom";
import styled from "styled-components";
import NavIconBell from "../../assets/bell.svg";
import HeaderLogo from "../../assets/musinsa_logo.png";
import NavIcon from "../../assets/navIcon.svg";
import Input from "../common/Input";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1440px;
  height: 192px;
  background-color: #1a1b1f;
  padding: 0 16px;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-size: ${(props) => props.theme.fontSize.base};
`;

const HeaderLine = styled.div`
  width: 1px;
  height: 16px;
  background: #767679;
  margin: 0px 4px;
`;

const MenuStyledLink = styled(Link)`
  font-weight: bold;
`;

export default function Header() {
  const mainMenuList = [
    { label: "MUSINSA", path: "/" },
    { label: "BEAUTY", path: "/" },
    { label: "PLAYER", path: "/" },
    { label: "OUTLET", path: "/" },
    { label: "BOUTIQUE", path: "/" },
    { label: "SNAKERS", path: "/" },
    { label: "KIDS", path: "/" },
  ];

  const subMenuList = [
    { label: "검색", path: "/" },
    { label: "좋아요", path: "/" },
    { label: "마이", path: "/" },
    { label: "장바구니", path: "/" },
  ];

  return (
    <HeaderWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            padding: "20px 0px",
            width: "100%",
            height: "55px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={NavIcon} alt="nav icon" />
          <HeaderLine />
          {mainMenuList.map((item, index) => (
            <MenuStyledLink to={item.path} key={index}>
              {item.label}
            </MenuStyledLink>
          ))}
          <HeaderLine />
          <MenuStyledLink to="/">(S)SNAP</MenuStyledLink>
        </div>

        <div
          style={{
            padding: "20px 0px",
            width: "100%",
            height: "55px",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            gap: "8px",
          }}
        >
          <MenuStyledLink to="/" style={{ fontSize: "14px" }}>
            오프라인 스토어
          </MenuStyledLink>
          <HeaderLine />
          {subMenuList.map((item, index) => (
            <MenuStyledLink
              to={item.path}
              key={index}
              style={{ fontSize: "14px" }}
            >
              {item.label}
            </MenuStyledLink>
          ))}
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "52px",
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
          padding: "12px 0px",
        }}
      >
        <img
          src={HeaderLogo}
          alt="logo"
          style={{ width: "auto", height: "20px" }}
        />
        <img
          src={NavIconBell}
          alt="nav icon_bell"
          style={{ width: "auto", height: "20px" }}
        />
      </div>

      <div
        style={{
          width: "100%",
          height: "36px",
        }}
      >
        <Input
          width="100%"
          height="36px"
          placeholder="뷰티위크 최대 25% 쿠폰"
          onSearch={(q) => console.log("검색:", q)}
        />
      </div>
    </HeaderWrapper>
  );
}
