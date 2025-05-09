import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavIconBell from "../../assets/bell.svg";
import HeaderLogo from "../../assets/musinsa_logo.png";
import NavIcon from "../../assets/navIcon.svg";
import Input from "../common/Input";
import CommonTabs from "./Tab";

const HeaderWrapper = styled.header`
  // position: fixed;
  top: 0;
  left: 50%;
  // transform: translateX(-50%);
  width: 1440px;
  height: 192px;
  background-color: #1a1b1f;
  padding: 0 16px;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-size: ${(props) => props.theme.fontSize.base};
`;

const HeaderNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderMainNav = styled.div`
  padding: 20px 0px;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const HeaderSubNav = styled.div`
  padding: 20px 0px;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
`;

const HeaderLogoWrapper = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 12px 0px;
`;

const HeaderInputWrapper = styled.div`
  width: 100%;
  height: 36px;
`;

const HeaderTabWrapper = styled.div``;

const HeaderLine = styled.div`
  width: 1px;
  height: 16px;
  background: #767679;
  margin: 0px 4px;
`;

const MenuStyledLink = styled(Link)`
  font-weight: bold;
  color: white;
`;

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

export default function Header() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <HeaderWrapper>
      <HeaderNavWrapper>
        <HeaderMainNav>
          <img src={NavIcon} alt="nav icon" />
          <HeaderLine />
          {mainMenuList.map((item, index) => (
            <MenuStyledLink to={item.path} key={index}>
              {item.label}
            </MenuStyledLink>
          ))}
          <HeaderLine />
          <MenuStyledLink to="/">(S)SNAP</MenuStyledLink>
        </HeaderMainNav>

        <HeaderSubNav>
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
        </HeaderSubNav>
      </HeaderNavWrapper>

      <HeaderLogoWrapper>
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
      </HeaderLogoWrapper>

      <HeaderInputWrapper style={{}}>
        <Input
          width="100%"
          height="36px"
          placeholder="뷰티위크 최대 25% 쿠폰"
          onSearch={(q) => console.log("검색:", q)}
        />
      </HeaderInputWrapper>

      <HeaderTabWrapper>
        <CommonTabs
          items={[
            { text: "추천" },
            { text: "랭킹" },
            { text: "세일" },
            { text: "신상" },
            { text: "브랜드" },
          ]}
          value={tabIndex}
          selectedTab={setTabIndex}
        />
      </HeaderTabWrapper>
    </HeaderWrapper>
  );
}
