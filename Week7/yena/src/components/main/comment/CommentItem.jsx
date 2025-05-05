import React from "react";
import * as S from "../Main.style";

export default function CommentItem({ commentText, comment, setComment}) {
    const deleteComment = () => {
        setComment(comment.filter((comm) => comm !== commentText));
    };

    return (
        <S.CommentItemLayout>
            <S.CommentText>{ commentText }</S.CommentText>
            <S.DeleteButton onClick = { deleteComment }>삭제</S.DeleteButton>
        </S.CommentItemLayout>
    )
}            
