import { Link } from "react-router-dom";
import styled from "styled-components";
import NavIcon from "../../assets/navIcon.svg";

const HeaderLine = styled.div`
  width: 1px;
  height: 16px;
  background: #767679;
`;

const MenuStyledLink = styled(Link)``;

export default function HeaderMainNav() {
  const mainMenuList = [{ label: "MUSINSA", path: "/" }];
  return (
    <div
      style={{
        padding: "20px 0px",
        width: "100%",
        border: "1px solid yellow",
        height: "55px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <img src={NavIcon} alt="nav icon" />
      <HeaderLine />
      <div>
        {mainMenuList.map((item, index) => (
          <MenuStyledLink to={item.path} key={index}>
            {item.label}
          </MenuStyledLink>
        ))}
      </div>
    </div>
  );
}
