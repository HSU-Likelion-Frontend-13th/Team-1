import styled from "styled-components";

/* comment */
export const SectionTitle = styled.div`
    font-size: larger;
    font-weight: 700;
`

export const CommentLayout = styled.div`
    width: 60vw;
`

export const CommentWrapper = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 1rem 0;
`

/* input */
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

/* button */
export const ButtonLayout = styled.button`
  width: 100px;
  height: 3rem;
  border: none;
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

/* commenteditor */
export const AddCommentWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

/* commentitem */
export const CommentItemLayout = styled.div`
  width: 70%;
  height: 4rem;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem;
`;

export const DeleteButton = styled.button`
  width: 70px;
  height: 25px;
  border: 1px solid grey;
  background-color: white;
`;

export const CommentText = styled.div``;

export const EditButton = styled.button`
  width: 70px;
  height: 25px;
  border: 1px solid grey;
  background-color: white;
`;

export const DeleteAndEdit = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const EditInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 1rem;
  outline: none;
`;