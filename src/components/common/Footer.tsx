import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 366px;
  border: 1px solid red;
`;

export default function Footer() {
  return (
    <FooterWrapper
      style={{
        width: "100%",
        height: "366px",
        border: "1px solid red",
        display: "flex",
        alignItems: "end",
      }}
    ></FooterWrapper>
  );
}
