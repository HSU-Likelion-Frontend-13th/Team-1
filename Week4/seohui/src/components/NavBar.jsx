import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

// NavBar 스타일 컴포넌트
const NavBarLayout = styled.div`
  display: flex;
  gap: 1.66vw;
`;

// 네비게이션 바
const NavBar = () => {
  return (
    <NavBarLayout>
      <NavItem href="#" item="ABOUT" />
      <NavItem href="#" item="HOBBY" />
      <NavItem href="#" item="CONTACT" />
    </NavBarLayout>
  );
};

export default NavBar;
