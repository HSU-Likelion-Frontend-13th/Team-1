// EDUCATION, SKILLS, WORK, ACTIVITES 부분
import React from "react";
import styled from "styled-components";
import InfoItem from "./InfoItem";

// Information 스타일 컴포넌트
const InformationLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  height: 25.93vw;
  gap: 9.2vw;
`;

// EDUCATION, SKILLS, WORK, ACTIVITIES 데이터
const infoData = [
  {
    title: "EDUCATION",
    content: (
      <>
        동탄중앙고등학교
        <br />
        2018.03~2021.02
        <br />
        <br />
        한성대학교 컴퓨터공학부
        <br />
        2021.03~2026.02
      </>
    ),
  },
  {
    title: "SKILLS",
    content: (
      <>
        Python
        <br />
        Java
        <br />
        JavaScript
        <br />
        Dart
      </>
    ),
  },
  {
    title: "WORK",
    content: <>프론트엔드 개발자</>,
  },
  {
    title: "ACTIVITIES",
    content: <>멋쟁이사자처럼 13기</>,
  },
];

const Information = () => {
  return (
    <InformationLayout>
      {infoData.map((item, index) => (
        <InfoItem key={index} title={item.title} content={item.content} />
      ))}
    </InformationLayout>
  );
};

export default Information;
