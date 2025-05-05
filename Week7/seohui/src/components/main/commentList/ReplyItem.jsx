import React from "react";
import * as S from "../Main.style";

// 대댓글 하나
const ReplyItem = ({ reply, comment, commentList, setCommentList }) => {
  // 대댓글 삭제하기
  const deleteReply = () => {
    // 해당 Reply가 아닌 애들끼리 배열 업데이트
    const updatedReplies = comment.replies.filter((r) => r.id !== reply.id);
    const updatedComment = { ...comment, replies: updatedReplies };

    // 해당 댓글만 새로운 댓글 객체로 갱신
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
