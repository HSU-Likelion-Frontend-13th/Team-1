import React from "react";
import styled from "styled-components";

// InfoItem 스타일 컴포넌트
const InfoContainer = styled.div``;

const InfoTitle = styled.p`
  color: #000000;
  font-size: 1.66vw;
  font-weight: bold;
  margin-bottom: 1.2vw;
`;

const InfoContent = styled.p`
  line-height: 1.5;
  font-size: 1.04vw;
  font-weight: bold;
  color: #626682;
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
