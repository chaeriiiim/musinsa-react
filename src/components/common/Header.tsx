// Header.tsx
import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1440px;
  height: 80px;
  background-color: #1a1b1f;
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  color: white;
  font-weight: bold;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>MUSINSA</Logo>
    </HeaderWrapper>
  );
}
