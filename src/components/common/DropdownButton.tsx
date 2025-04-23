import styled from "styled-components";
// import { useState } from "react";
import ArrowIcon from "../../assets/downArrow.svg";

const DropdownWrapper = styled.div`
  width: 100%;
  height: 36px;
  padding: 0px 14px;
`;

const DropdownButton = styled.button`
  width: 100%;
  height: 36px;
  // background-color: #f0f0f0;
  color: #666666;
  display: flex;
  align-items: center;
`;

const Dropdown = () => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownWrapper>
      <DropdownButton>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "42px",
          }}
        >
          <p style={{ margin: "0px" }}>사업자</p>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <img src={ArrowIcon} alt="arrow_img" />
        </div>
      </DropdownButton>
    </DropdownWrapper>
  );
};

export default Dropdown;
