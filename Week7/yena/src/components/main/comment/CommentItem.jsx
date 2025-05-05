import React from "react";
import * as S from "../Main.style";

export default function CommentItem({ commentText, comment, setComment}) {    return (
        <S.CommentItemLayout>
            <S.CommentText>{ commentText }</S.CommentText>
        </S.CommentItemLayout>
    )
}            
