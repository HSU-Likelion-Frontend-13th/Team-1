import React from "react";
import * as S from "./Header.style";
import COMMENT from "../../assets/comment.png";

const Header = () => {
  return (
    <S.HeaderLayout>
      <S.CommentIcon src={COMMENT} />
      <S.Title>Comment</S.Title>
    </S.HeaderLayout>
  );
};

export default Header;
