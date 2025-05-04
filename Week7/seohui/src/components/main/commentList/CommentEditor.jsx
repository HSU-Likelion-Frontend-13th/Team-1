import React from "react";
import * as S from "../Main.style";
import Input from "../Input";
import Button from "../Button";

const CommentEditor = ({ inputText, setInputText, addComment }) => {
  return (
    <S.AddCommentWrapper>
      <Input inputText={inputText} setInputText={setInputText} />
      <Button text={"작성하기"} onClick={addComment}></Button>
    </S.AddCommentWrapper>
  );
};

export default CommentEditor;
