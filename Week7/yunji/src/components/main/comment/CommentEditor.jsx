import React from "react";
import * as S from "../Main.style";
import Input from "../Input";
import Button from "../Button";

export default function CommentEditor({ inputText, setInputText, onSubmit }) {
    
    const addComment = () => {
        if (inputText.trim() === "") return;
        onSubmit(inputText);
        setInputText("");
    };

    return (
        <S.AddTodoWrapper>
        <Input
            inputText={inputText}
            setInputText={setInputText}
            placeholder="댓글을 작성해주세요."
        />
        <Button text={"댓글 작성하기"} addTodo={addComment} />
        </S.AddTodoWrapper>
    );
}
