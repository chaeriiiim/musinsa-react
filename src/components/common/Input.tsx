import React from "react";
import styled from "styled-components";
import SerachIcon from "../../assets/searchIcon.svg";

interface InputProps {
  width?: string;
  height?: string;
  placeholder?: string;
  onSearch: (value: string) => void;
}

const InputWapper = styled.div<{ width?: string; height?: string }>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 11px 8px;
  border-radius: 4px;
  font-size: ${(props) => props.theme.fontSize.xs};
  color: #8a8a8a;
  background-color: #ffffff;
`;

const SearchIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const SearchInput: React.FC<InputProps> = ({
  width = "100%",
  height = "40px",
  placeholder = "검색어를 입력하세요.",
  onSearch,
}) => {
  const [value, setValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) {
      onSearch(value);
    }
  };

  const handleSearchClick = () => {
    if (value.trim()) {
      onSearch(value);
    }
  };

  return (
    <InputWapper width={width} height={height}>
      <StyledInput
        type="text"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
      />
      <SearchIcon onClick={handleSearchClick}>
        <img src={SerachIcon} alt="search icon" />
      </SearchIcon>
    </InputWapper>
  );
};

export default SearchInput;
