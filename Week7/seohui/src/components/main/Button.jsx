import React from "react";
import * as S from "./Main.style";

const Button = ({ text, onClick }) => {
  return (
    <S.ButtonLayout onClick={onClick}>
      <S.ButtonContainer>{text}</S.ButtonContainer>
    </S.ButtonLayout>
  );
};

export default Button;
