import styled from "styled-components";
import Dropdown from "./DropdownButton";

const FooterWrapper = styled.footer`
  width: 100%;
  // height: 366px;
  background-color: #f0f0f0;
  padding: 15px 0px 72px 0px;
  display: flex;
  flex-direction: column;
`;

const FooterButtonWrapper = styled.div`
  height: 62px;
  margin: 0px 16px;
  padding: 5px 0px 24px 0px;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #e6e6e6;
    margin: 24px auto;
  }
`;

const FooterButton = styled.button`
  height: 28px;
  padding: 0px 10px;
  background-color: #8a8a8a1a;
  color: #666666;
  margin-right: 5px;
`;

const FooterCopy = styled.div`
  padding: 0px 16px;

  & p {
    color: #666666;
  }
`;

const FooterCopyTitle = styled.p`
  color: #666666;
  font-size: 13px;
  margin: 10px 0px 0px 0px;
`;

const FooterCopyLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 18px;
  margin-top: 10px;

  & a {
    color: #666666;
    font-size: 13px;
  }
`;

const buttonList = [
  { label: "MUSINSA", path: "/" },
  { label: "BEAUTY", path: "/" },
  { label: "PLAYER", path: "/" },
  { label: "OUTLET", path: "/" },
  { label: "BOUTIQUE", path: "/" },
  { label: "SNAKERS", path: "/" },
  { label: "KIDS", path: "/" },
];

const copyMenuList = [
  { label: "개인정보처리방침", path: "#" },
  { label: "이용약관", path: "#" },
  { label: "결제대행 위탁사", path: "#" },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterButtonWrapper>
        {buttonList.map((item, index) => (
          <FooterButton key={index}>{item.label}</FooterButton>
        ))}
      </FooterButtonWrapper>
      <Dropdown />

      <FooterCopy>
        <FooterCopyTitle>@ MUSINSA ALL RIGHTS RESERVED</FooterCopyTitle>

        <FooterCopyLink>
          {copyMenuList.map((list, index) => (
            <div key={index}>
              <a href={list.path}>{list.label}</a>
              {index < copyMenuList.length - 1 && <p>·</p>}
            </div>
          ))}
        </FooterCopyLink>

        <p style={{ color: "#8A8A8A", fontSize: "13px" }}>
          일부 상품의 경우 주식회사 무신사는 통신판매의 당사자가 아닌
          통신판매중개자로서 상품, 상품정보, 거래에 대한 책임이 제한될 수
          있으므로, 각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.
        </p>
      </FooterCopy>
    </FooterWrapper>
  );
}
