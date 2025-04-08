import styled from "styled-components";
import NavIcon from "../../assets/navIcon.svg";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1440px;
  height: 192px;
  background-color: #1a1b1f;
  display: flex;
  align-items: center;
  padding: 0 16px;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const HeaderNav = styled.div`
  width: 100%;
  height: 55px;
  padding: 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const HeaderLine = styled.div`
  width: 1px;
  height: 16px;
  background-color: #767679;
  margin-left: 8px;
`;

const NavigationList = styled.ul`
  list-style: none; /* 기본 리스트 스타일 제거 */
  padding: 0;
  margin: 0;
  display: flex; /* flexbox로 변경 */
  gap: 16px; /* li들 사이 간격 설정 */
`;

const NavItem = styled.li`
  display: inline-block; /* li 요소가 가로로 나열되도록 */
`;

const NavLink = styled.a`
  text-decoration: none; /* 기본 밑줄 제거 */
  color: inherit; /* 부모 요소의 텍스트 색상 상속 */
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderNav>
        <img src={NavIcon} alt="navIcon" />
        <HeaderLine />
        <NavigationList>
          <NavItem>
            <NavLink href="#">MUSINSA</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">BEAUTY</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">PLAYER</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">OUTLET</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">BOUTIQUE</NavLink>
          </NavItem>
        </NavigationList>
      </HeaderNav>
    </HeaderWrapper>
  );
}
