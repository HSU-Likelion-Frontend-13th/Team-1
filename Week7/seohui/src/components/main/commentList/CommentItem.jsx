import React, { useState } from "react";

import * as S from "../Main.style";

const CommentItem = ({ commentText, commentList, setCommentList }) => {
  const [isEditing, setIsEditing] = useState(false); // 편집 여부

  const deleteComment = () => {
    // 해당 Comment가 아닌 애들끼리 배열 업데이트
    setCommentList(commentList.filter((c) => c !== commentText));
  };

  const editComment = () => {
    setIsEditing(!isEditing); // 편집 여부 토글
  };

  return (
    <S.CommentItemLayout>
      <S.CommentText>{commentText}</S.CommentText>
      <S.DeleteAndEdit>
        <S.DeleteButton onClick={deleteComment}>삭제</S.DeleteButton>
        <S.EditButton onClick={editComment}>수정</S.EditButton>
      </S.DeleteAndEdit>
    </S.CommentItemLayout>
  );
};

export default CommentItem;
