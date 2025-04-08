import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import styled from "styled-components";

interface TabItem {
  text: string;
}

interface CommonTabsProps {
  items: TabItem[];
  value: number;
  selectedTab: (newValue: number) => void;
}

const TabsStyle = styled(Tabs)`
  &.MuiTabs-root {
    min-height: auto;
  }

  & .MuiTabs-indicator {
    background-color: #ffffff;
    height: 2px;
  }

  & .MuiTabs-flexContainer {
    justify-content: flex-start;
    gap: 8px;
  }
`;

const TabStyle = styled(Tab)`
  &.MuiButtonBase-root {
    color: #a3a4a5;
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: bold;
    padding: 6px 0px;
    min-width: auto;
    // min-height: auto;
    line-height: 1;
    text-transform: none;

    &.Mui-selected {
      color: #ffffff;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

const CommonTabs: React.FC<CommonTabsProps> = ({
  items,
  value,
  selectedTab,
}) => {
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    selectedTab(newValue);
  };

  return (
    <TabsStyle value={value} onChange={handleChange}>
      {items.map((item, index) => (
        <TabStyle key={index} label={item.text} disableRipple />
      ))}
    </TabsStyle>
  );
};

export default CommonTabs;
