import React, { useState } from "react";
import * as S from "../Main.style";

export default function CommentItem({ commentText, comment, setComment}) {
    const deleteComment = () => {
        setComment(comment.filter((comm) => comm !== commentText));
    };

    const [isEditing, setIsEditing] = useState(false);
    const [edit, setEdit] = useState(commentText);

    const editComment = () => {
        setIsEditing(!isEditing);
    };

    const finishEditing = () => {
        const updateComment = comment.map((comm) =>
            comm === commentText ? edit : comm
       );

       setComment(updateComment);
       setIsEditing(false);
    }

    return (
        <S.CommentItemLayout>
            { isEditing ? (
                <>
                    <S.EditInput
                        type = "text"
                        value = { edit }
                        onChange = { (e) => setEdit(e.target.value) }
                    />
                    <S.DeleteAndEdit>
                        <S.EditButton onClick = { finishEditing }>수정 완료</S.EditButton>
                        <S.DeleteButton onClick = { deleteComment }>삭제</S.DeleteButton>
                    </S.DeleteAndEdit>
                </>
            ) : (
                <>
                    <S.CommentText>{ commentText }</S.CommentText>
                    <S.DeleteAndEdit>
                        <S.EditButton onClick = { editComment }>수정</S.EditButton>
                        <S.DeleteButton onClick = { deleteComment }>삭제</S.DeleteButton>
                    </S.DeleteAndEdit>
                </>
            )}
        </S.CommentItemLayout>
    )
}            