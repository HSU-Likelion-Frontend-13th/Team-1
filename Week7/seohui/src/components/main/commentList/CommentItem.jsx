import React, { useState } from "react";

import * as S from "../Main.style";
import CommentEditor from "./CommentEditor";
import ReplyItem from "./ReplyItem";

// 댓글 하나
const CommentItem = ({ comment, commentList, setCommentList }) => {
  const [isEditing, setIsEditing] = useState(false); // 편집 여부
  const [editedText, setEditedText] = useState(comment.text); // 수정할 댓글

  const [isReplying, setIsReplying] = useState(false); // 대댓글 작성 여부
  const [replyText, setReplyText] = useState(""); // 대댓글 텍스트

  const deleteComment = () => {
    // 해당 Comment가 아닌 애들끼리 배열 업데이트
    setCommentList(commentList.filter((c) => c.id !== comment.id));
  };

  const editComment = () => {
    // 해당하는 댓글 수정
    if (isEditing) {
      setCommentList(
        commentList.map((c) =>
          c.id === comment.id ? { ...c, text: editedText } : c
        )
      );
    }
    setIsEditing(!isEditing); // 편집 여부 토글
  };

  // 대댓글 추가하기
  const addReply = () => {
    // 아무것도 입력 안했을 때
    if (replyText.trim() === "") return;

    const updatedComment = {
      ...comment,
      replies: [
        ...(comment.replies || []),
        { id: Date.now(), text: replyText },
      ],
    };
    setCommentList(
      commentList.map((c) => (c.id === comment.id ? updatedComment : c))
    );

    setReplyText(""); // 입력창 초기화
    setIsReplying(false);
  };

  return (
    <S.CommentItemLayout>
      {/* 댓글내용과 버튼들 */}
      <S.CommentTop>
        {isEditing ? (
          <S.EditInput
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <S.CommentText>{comment.text}</S.CommentText>
        )}
        <S.DeleteAndEdit>
          <S.DeleteButton onClick={deleteComment}>삭제</S.DeleteButton>
          <S.EditButton onClick={editComment}>
            {isEditing ? "수정완료" : "수정"}
          </S.EditButton>
          <S.ReplyButton onClick={() => setIsReplying(!isReplying)}>
            {isReplying ? "취소" : "댓글"}
          </S.ReplyButton>
        </S.DeleteAndEdit>
      </S.CommentTop>

      {/* 대댓글 목록 */}
      {comment.replies &&
        comment.replies.map((reply) => (
          <ReplyItem
            key={reply.id}
            reply={reply}
            comment={comment}
            commentList={commentList}
            setCommentList={setCommentList}
          />
        ))}

      {/* 대댓글 입력창 */}
      {isReplying && (
        <CommentEditor
          inputText={replyText}
          setInputText={setReplyText}
          addComment={addReply}
        />
      )}
    </S.CommentItemLayout>
  );
};

export default CommentItem;
