import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 366px;
  background-color: #f0f0f0;
  padding: 15px 0px 72px 0px;
`;

const FooterButtonWrapper = styled.div`
  height: 62px;
  border: 1px solid black;
  margin: 0px 16px;
  padding: 5px 0px 24px 0px;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterButtonWrapper>
        <div>
          <button
            style={{
              height: "28px",
              padding: "0px 10px",
              backgroundColor: "#8a8a8a1a",
              color: "#666666",
            }}
          >
            MUSINSA
          </button>
        </div>
      </FooterButtonWrapper>
    </FooterWrapper>
  );
}
