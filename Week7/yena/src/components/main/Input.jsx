import React from "react";
import * as S from "./Main.style.jsx";

export default function Input({ inputText, setInputText }) {
    return (
        <S.InputLayout>
            <S.InputContainer
                type = "text"
                value = { inputText }
                onChange = { (e) => setInputText(e.target.value) }
            ></S.InputContainer>
        </S.InputLayout>
    )
};