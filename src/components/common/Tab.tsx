import { Tab as MuiTab, Tabs } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface TabItem {
  label: string;
  value: string | number;
}

interface CustomTabProps {
  tabs: TabItem[];
  value: string | number;
  onChange: (value: string | number) => void;
  width?: string;
}

const Wrapper = styled.div<{ width?: string }>`
  width: ${(props) => props.width || "100%"};
`;

const CustomTab: React.FC<CustomTabProps> = ({
  tabs,
  value,
  onChange,
  width,
}) => {
  const handleChange = (_: React.SyntheticEvent, newValue: string | number) => {
    onChange(newValue);
  };

  return (
    <Wrapper width={width}>
      <Tabs value={value} onChange={handleChange}>
        {tabs.map((tab) => (
          <MuiTab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>
    </Wrapper>
  );
};

export default CustomTab;
