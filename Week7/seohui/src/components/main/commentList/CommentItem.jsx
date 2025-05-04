import React, { useState } from "react";

import * as S from "../Main.style";

const CommentItem = ({ commentText, commentList, setCommentList }) => {
  const [isEditing, setIsEditing] = useState(false); // 편집 여부
  const [editedText, setEditedText] = useState(commentText); // 수정할 댓글

  const deleteComment = () => {
    // 해당 Comment가 아닌 애들끼리 배열 업데이트
    setCommentList(commentList.filter((c) => c !== commentText));
  };

  const editComment = () => {
    // 해당하는 댓글 수정
    if (isEditing) {
      setCommentList(
        commentList.map((c) => (c === commentText ? editedText : c))
      );
    }
    setIsEditing(!isEditing); // 편집 여부 토글
  };

  return (
    <S.CommentItemLayout>
      {isEditing ? (
        <input
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <S.CommentText>{commentText}</S.CommentText>
      )}
      <S.DeleteAndEdit>
        <S.DeleteButton onClick={deleteComment}>삭제</S.DeleteButton>
        <S.EditButton onClick={editComment}>
          {isEditing ? "수정완료" : "수정"}
        </S.EditButton>
      </S.DeleteAndEdit>
    </S.CommentItemLayout>
  );
};

export default CommentItem;
