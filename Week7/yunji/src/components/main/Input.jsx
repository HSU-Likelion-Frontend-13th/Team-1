import React from "react";
import * as S from "./Main.style";

export default function Input({ inputText, setInputText, placeholder }) {
    return (
        <S.InputLayout>
        <S.InputContainer type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder={placeholder}
        ></S.InputContainer>
        </S.InputLayout>
    );
}
