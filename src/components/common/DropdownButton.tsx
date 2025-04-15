import { useState } from "react";
import styled from "styled-components";

const DropdownWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const DropdownButton = styled.button`
  padding: 8px 16px;
  background-color: #f0f0f0;
  cursor: pointer;
  width: 1408px;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f0f0f0;
  // border: 1px solid #ccc;
  list-style: none;
  padding: 8px;
  margin: 0;
  width: 100%;
`;

const DropdownItem = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Dropdown = ({ options }: { options: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleItemClick = (item: string) => {
    alert(`Selected : ${item}`);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={toggleDropdown}>Select Option</DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {options.map((item, index) => (
            <DropdownItem key={index} onClick={() => handleItemClick(item)}>
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};
{
  /* 내용 추가 */
}
export default Dropdown;
