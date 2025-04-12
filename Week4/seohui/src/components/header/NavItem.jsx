// 네비게이션 바에 들어가는 카테고리
import React from "react";
import styled from "styled-components";

// 네비게이션 바 아이템 스타일 컴포넌트
const NavItemLayout = styled.a`
  font-size: 1.45vw;
  font-weight: 500;
  text-decoration: none;
  color: #000000;

  &:hover {
    color: #4a86ff;
  }
`;
// 네비게이션 바 아이템
const NavItem = ({ href, item }) => {
  return <NavItemLayout href={href}>{item}</NavItemLayout>;
};

export default NavItem;
