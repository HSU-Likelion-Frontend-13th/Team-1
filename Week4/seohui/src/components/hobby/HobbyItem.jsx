import React from "react";
import styled from "styled-components";

// HobbyItem 스타일 컴포넌트
const HobbyItemLayout = styled.div`
  background-color: #ffffff;
  border: #ebedf8;
  border-radius: 0.83vw;
  text-align: center;
  width: 19.79vw;
  margin-bottom: 3.12vw;
`;

const ItemTitle = styled.p`
  background-color: #4a86ff;
  color: #ffffff;
  font-size: 1.66vw;
  font-weight: 700;
  border-radius: 0.83vw 0.83vw 0 0;
  padding: 1.04vw;
`;

const ItemImg = styled.img`
  width: 15.62vw;
  height: 11.45vw;
  margin: 2.08vw;
  border-radius: 0.4vw;
`;

const HobbyItem = ({ title, img, alt }) => {
  return (
    <HobbyItemLayout>
      <ItemTitle>{title}</ItemTitle>
      <ItemImg src={img} alt={alt} />
    </HobbyItemLayout>
  );
};

export default HobbyItem;
