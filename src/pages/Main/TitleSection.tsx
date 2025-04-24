import styled from "styled-components";

interface TitleSectionProps {
  link: string;
  title: string;
  subtitle: string;
}

const TitleWrapper = styled.div`
  width: 100%;
  height: 72px;
  padding: 12px 16px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    font-size: 13px;
    color: #666666;
    text-decoration-line: underline;
  }
`;

export default function TitleSection({
  link,
  title,
  subtitle,
}: TitleSectionProps) {
  return (
    <TitleWrapper>
      <p>
        {title}
        <br />
        {subtitle}
      </p>

      <a href={link}>더보기</a>
    </TitleWrapper>
  );
}
