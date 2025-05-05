import React from "react";
import * as S from "../Main.style";

// 대댓글 하나
const ReplyItem = ({ reply, comment, commentList, setCommentList }) => {
  // 대댓글 삭제하기
  const deleteReply = () => {
    const updatedReplies = comment.replies.filter((r) => r.id !== reply.id);
    const updatedComment = { ...comment, replies: updatedReplies };
    setCommentList(
      commentList.map((c) => (c.id === comment.id ? updatedComment : c))
    );
  };

  return (
    <S.ReplyWrapper>
      <S.ReplyText>&gt;&gt; {reply.text}</S.ReplyText>
      <S.ReplyDeleteButton onClick={deleteReply}>삭제</S.ReplyDeleteButton>
    </S.ReplyWrapper>
  );
};

export default ReplyItem;
