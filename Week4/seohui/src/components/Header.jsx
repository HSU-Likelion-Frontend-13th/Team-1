import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavBar from "./NavBar";

// Header 스타일 컴포넌트
const HeaderLayout = styled.nav`
  width: 100vw;
  height: 6.25vw;
  background-color: #ffffff;
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
