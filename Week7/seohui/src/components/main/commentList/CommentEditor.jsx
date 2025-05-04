import React from "react";
import * as S from "../Main.style";
import Input from "../Input";
import Button from "../Button";

const CommentEditor = ({ inputText, setInputText, addComment }) => {
  return (
    <S.AddCommentWrapper>
      <Input
        inputText={inputText}
        setInputText={setInputText}
        placeholder="댓글을 작성해주세요."
      />
      <Button text={"작성하기"} onClick={addComment}></Button>
    </S.AddCommentWrapper>
  );
};

export default CommentEditor;
