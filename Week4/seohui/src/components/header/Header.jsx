// 로고, 네비게이션 바 (헤더)
import React from "react";
import styled from "styled-components";
import colors from "../../styles/color";
import Logo from "./Logo";
import NavBar from "./NavBar";

// Header 스타일 컴포넌트
const HeaderLayout = styled.nav`
  width: 100%;
  height: 6.25vw;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
`;

const Header = () => {
  return (
    <HeaderLayout>
      <Logo />
      <NavBar />
    </HeaderLayout>
  );
};

export default Header;
