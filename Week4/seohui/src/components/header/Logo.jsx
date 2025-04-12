import React from "react";
import styled from "styled-components";
import LOGO from "../../assets/logo.svg";

// Logo 스타일 컴포넌트
const LogoBox = styled.div`
  width: 17.7vw;
`;

const LogoImg = styled.img`
  width: 100%;
  transition: transform 0.3s ease;

  &:hover {
    // 마우스 올리면 확대
    transform: scale(1.05);
  }
`;

const Logo = () => {
  return (
    <LogoBox>
      <LogoImg src={LOGO} alt="로고" />
    </LogoBox>
  );
};

export default Logo;
