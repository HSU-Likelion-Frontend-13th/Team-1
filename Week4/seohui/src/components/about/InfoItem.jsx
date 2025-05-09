// Information Grid에 들어갈 정보 아이템
import React from "react";
import styled from "styled-components";
import colors from "../../styles/color";

// InfoItem 스타일 컴포넌트
const InfoContainer = styled.div``;

const InfoTitle = styled.p`
  color: ${colors.black};
  font-size: 1.66vw;
  font-weight: 700;
  margin-bottom: 1.2vw;
`;

const InfoContent = styled.p`
  line-height: 1.5;
  font-size: 1.04vw;
  font-weight: 700;
  color: ${colors.infoTextColor};
`;

const InfoItem = ({ title, content }) => {
  return (
    <InfoContainer>
      <InfoTitle>{title}</InfoTitle>
      <InfoContent>{content}</InfoContent>
    </InfoContainer>
  );
};

export default InfoItem;
