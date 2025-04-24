import styled from "styled-components";

const TitleWrapper = styled.div`
  width: 100%;
  height: 72px;
  padding: 12px 16px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function TitleSection() {
  return (
    <TitleWrapper>
      <p>
        스포츠 종목 아이템 추천
        <br />
        등산/아웃도어
      </p>

      <a
        href="#"
        style={{
          fontSize: "13px",
          color: "#666666",
          textDecorationLine: "underline",
        }}
      >
        더보기
      </a>
    </TitleWrapper>
  );
}
