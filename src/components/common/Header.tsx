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
  font-size: ${(props) => props.theme.fontSize.base};
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
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 16px;
`;

const NavItem = styled.li`
  display: inline-block;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
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
