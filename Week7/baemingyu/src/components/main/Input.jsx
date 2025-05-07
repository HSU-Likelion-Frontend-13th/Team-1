import React from "react";
import * as S from "./Main.style";

export default function Input({ inputText, setInputText }) {
  return (
    <S.InputLayout>
      <S.InputContainer
        type="text"
        value={inputText}
        placeholder="댓글을 작성해주세요." // 기본 메시지
        onChange={(e) => setInputText(e.target.value)}
        onFocus={(e) => {
          if (e.target.value === "댓글을 작성해주세요.") {
            setInputText("");
          }
        }}
        onBlur={(e) => {
          if (e.target.value.trim() === "") {
            setInputText("");
          }
        }}
      />
    </S.InputLayout>
  );
}
