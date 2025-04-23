import { useState } from "react";
import styled from "styled-components";
import ArrowIcon from "../../assets/downArrow.svg";

const DropdownWrapper = styled.div`
  width: 100%;
  height: 36px;
`;

const DropdownButton = styled.button`
  width: 100%;
  height: 36px;
  background-color: #f0f0f0;
  color: #666666;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownMenu = styled.div`
  width: 100%;
  color: #666666;
  font-size: 13px;
  margin-top: 8px; /* 버튼과 메뉴 사이의 간격을 조절 */
  padding: 0px 16px; /* 메뉴 내부의 간격 */
`;

const DropdownTitle = styled.div`
  display: flex;

  & p {
    margin: 0px;
    font-size: 13px;
  }
`;

const Dropdown = () => {
  const [openDropdown, setOpenDropdown] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleToggle = (index: string) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const dropdownData = [
    { label: "사업자 정보", content: "사업자 정보 내용1" },
    { label: "법적 고지사항", content: "사업자 정보 내용2" },
    { label: "파트너 지원", content: "사업자 정보 내용2" },
    { label: "고객 지원", content: "사업자 정보 내용2" },
  ];
  return (
    <DropdownWrapper>
      {dropdownData.map((item, index) => (
        <div key={index}>
          <DropdownButton onClick={() => handleToggle(index.toString())}>
            <DropdownTitle>
              <p>{item.label}</p>
            </DropdownTitle>
            <div>
              <img src={ArrowIcon} alt="arrow_img" />
            </div>
          </DropdownButton>

          {openDropdown[index.toString()] && (
            <DropdownMenu>{item.content}</DropdownMenu>
          )}
        </div>
      ))}
    </DropdownWrapper>
  );
};

export default Dropdown;
