// import { useState } from "react";
// import styled from "styled-components";

// const DropdownWrapper = styled.div`
//   display: inline-block;
//   position: relative;
// `;

// const DropdownButton = styled.button`
//   padding: 8px 16px;
//   background-color: #f0f0f0;
//   cursor: pointer;
//   width: 1408px;
// `;

// const DropdownMenu = styled.ul`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   background-color: #f0f0f0;
//   // border: 1px solid #ccc;
//   list-style: none;
//   padding: 8px;
//   margin: 0;
//   width: 100%;
// `;

// const DropdownItem = styled.li`
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;

// const Dropdown = ({ options }: { options: string[] }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <DropdownWrapper>
//       {options.map((item, index) => (
//         <DropdownButton key={index} onClick={toggleDropdown}>
//           {item}
//         </DropdownButton>
//       ))}

//       {isOpen && (
//         <DropdownMenu>
//           {options.map((item, index) => (
//             <DropdownItem key={index}>{item}</DropdownItem>
//           ))}
//         </DropdownMenu>
//       )}
//     </DropdownWrapper>
//   );
// };

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
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
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
