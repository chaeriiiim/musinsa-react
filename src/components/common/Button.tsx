import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
  width: string;
  height: string;
  backgroundColor: string;
  text: string;
  navigatePath: string;
  icon?: string;
}

const Root = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonWrapper = styled.button<{
  $width: string;
  $height: string;
  $backgroundColor: string;
}>`
  width: ${({ $width }) => ($width ? $width : "auto")};
  height: ${({ $height }) => ($height ? $height : "auto")};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
`;

const Text = styled.p`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

const Icon = styled.img`
  margin-right: 5px;
`;

export default function Button({
  width = "",
  height = "",
  backgroundColor = "",
  text,
  navigatePath,
  icon,
}: ButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigatePath);
  };

  return (
    <Root>
      <ButtonWrapper
        onClick={handleClick}
        $width={width}
        $height={height}
        $backgroundColor={backgroundColor}
      >
        {icon && <Icon src={icon} alt="icon" />}
        <Text>{text}</Text>
      </ButtonWrapper>
    </Root>
  );
}
