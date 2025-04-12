// Hobby 세션
import React from "react";
import styled from "styled-components";
import HobbyItem from "./HobbyItem";
import COFFEE from "../../assets/coffee.jpg";
import EXHIBITION from "../../assets/exhibition.jpg";
import DOG from "../../assets/dog.jpg";

// Hobby 스타일 컴포넌트
const HobbyLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  color: #4a86ff;
  font-weight: 800;
  font-size: 3.64vw;
  padding: 3.12vw 0;
`;

const HobbyList = styled.div`
  display: flex;
  gap: 1.04vw;
`;

// Hobby 데이터
const hobbyData = [
  { title: "아이러브커피", img: COFFEE, alt: "커피" },
  { title: "전시회 가기", img: EXHIBITION, alt: "전시회" },
  { title: "강아지 산책", img: DOG, alt: "산책" },
];

const Hobby = () => {
  return (
    <HobbyLayout>
      <Title>HOBBY</Title>
      <HobbyList>
        {hobbyData.map((item, index) => (
          <HobbyItem
            key={index}
            title={item.title}
            img={item.img}
            alt={item.alt}
          />
        ))}
      </HobbyList>
    </HobbyLayout>
  );
};

export default Hobby;
