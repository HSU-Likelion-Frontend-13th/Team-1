import React, { useState } from "react";
import * as S from "../Main.style";

export default function CommentItem({ text, index, onDelete, onUpdate }) {
    const [isEdit, setIsEdit] = useState(false);
    const [newText, setNewText] = useState(text);

    const deleteComment = () => {
        onDelete(text);
    };

    const changeComment = () => {
        onUpdate(index, newText);
        setIsEdit(false);
    };
    
    return (
    <S.CommentItemLayout>
    <S.DeleteAndEdit>
            <S.EditButton onClick={isEdit ? changeComment : () => setIsEdit(true)}>
            {isEdit ? "수정완료" : "수정"}
            </S.EditButton>
            <S.EditButton onClick={deleteComment}>삭제</S.EditButton>
        </S.DeleteAndEdit>
        </S.CommentItemLayout>
    );
}
