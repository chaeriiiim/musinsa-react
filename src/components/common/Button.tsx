import styled from "styled-components";
import ButtonImg from "../../assets/button_img.svg";

const Root = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  height: 36px;
  width: 600px;
  background-color: #38b0f4;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Button() {
  return (
    <Root>
      <ButtonWrapper>
        <img src={ButtonImg} style={{ marginRight: "5px" }}></img>
        <p style={{ color: "white", fontSize: "14px", fontWeight: "bold" }}>
          무신사 플레이어에서 더보기
        </p>
      </ButtonWrapper>
    </Root>
  );
}
