import React, { useState } from "react";
import CommentEditor from "./CommentEditor";
import CommentItem from "./CommentItem";
import * as S from "../Main.style";

// 댓글 목록
const CommentList = () => {
  const [commentList, setCommentList] = useState([]); // 댓글 목록
  const [inputText, setInputText] = useState(""); // 댓글 입력창

  // 댓글 추가하기
  const addComment = () => {
    // 아무것도 입력 안했을 때
    if (inputText.trim() === "") return;

    const comment = {
      id: Date.now(), // 고유 id 부여
      text: inputText, // 텍스트
      replies: [], // 대댓글
    };
    setCommentList([...commentList, comment]); // 목록에 추가
    setInputText(""); // 입력창 초기화
  };

  return (
    <S.CommentListLayout>
      <S.SectionTitle>✏️ 댓글 작성</S.SectionTitle>
      {/* 입력창, 추가버튼 컴포넌트 */}
      <CommentEditor
        inputText={inputText}
        setInputText={setInputText}
        addComment={addComment}
      />
      {/* 댓글 목록 */}
      <S.CommentListWrapper>
        {commentList.map((c) => (
          <CommentItem
            key={c.id} // 고유 id 식별 키
            comment={c}
            commentList={commentList}
            setCommentList={setCommentList}
          />
        ))}
      </S.CommentListWrapper>
    </S.CommentListLayout>
  );
};

export default CommentList;
