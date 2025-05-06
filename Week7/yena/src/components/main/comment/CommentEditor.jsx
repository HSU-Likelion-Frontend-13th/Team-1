import React from "react";
import * as S from "../Main.style.jsx";
import Input from "../Input";
import Button from "../Button";

export default function CommentEditor({ inputText, setInputText, addComment }) {
    return (
        <S.AddCommentWrapper>
            <Input
                inputText = { inputText }
                setInputText = { setInputText }
                placeholder = "댓글을 작성해 주세요."
            />
            <Button text = "댓글 작성하기" addComment = { addComment }></Button>
        </S.AddCommentWrapper>
    )
}