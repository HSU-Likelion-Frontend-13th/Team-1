// 중앙 Intro(소개글) 세션
import React from "react";
import styled from "styled-components";

// Intro 스타일 컴포넌트
const IntroLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100vw;
  height: 41.66vw;
  background-color: #4a86ff;
`;

const IntroText = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-family: "Inter", sans-serif;
  font-size: 4.16vw;
  margin: 0;
  line-height: 1.5;
`;

const Intro = () => {
  return (
    <IntroLayout>
      <IntroText>
        안녕하세요! <br />
        제 이름은 김서희 입니다. <br />
        신뢰도99% 개발자가 되고 싶어요.
      </IntroText>
    </IntroLayout>
  );
};

export default Intro;
