import styled from "styled-components";

export const SectionTitle = styled.div`
  font-size: larger;
  font-weight: 700;
`;

/* Comment */
export const CommentListLayout = styled.div`
  width: 60vw;
`;

export const AddCommentWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const CommentListWrapper = styled.div`
  width: 100%;
  max-height: 40vw;
  overflow: auto; /* 스크롤 */
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 1rem 0;
`;

export const CommentSection = styled.div`
  width: 60vw;
`;

// Input
export const InputLayout = styled.div`
  width: 100%;
  height: 3rem;
  border: 1px solid gray;
  margin: 0.5rem 0;
`;

export const InputContainer = styled.input`
  width: 100%;
  height: 100%;
`;

// Button
export const ButtonLayout = styled.button`
  width: 100px;
  height: 3rem;

  text-align: center;
  background-color: #5664f5;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

// CommentItem
export const CommentTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DeleteButton = styled.button`
  width: 50px;
  color: red;
  border: 1px solid red;
  font-size: 0.8rem;
`;

export const CommentItemLayout = styled.div`
  width: 85%;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.6rem;
`;

export const CommentText = styled.div``;

export const DateText = styled.div``;

export const EditButton = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid grey;
  font-size: 0.8rem;
`;

export const DeleteAndEdit = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const EditInput = styled.input`
  width: 100%;
  height: 100%;
`;

// ReplyItem
export const ReplyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding-left: 0.5rem;
  margin-top: 0.4rem;
`;

export const ReplyText = styled.div`
  font-size: 0.8rem;
`;

export const ReplyButton = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid black;
  font-size: 0.8rem;
`;

export const ReplyDeleteButton = styled.button`
  font-size: 0.8rem;
  color: red;
  background: none;
  border: none;
  cursor: pointer;
`;
