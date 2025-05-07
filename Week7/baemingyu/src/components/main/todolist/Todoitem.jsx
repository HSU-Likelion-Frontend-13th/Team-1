// components > main > Todolist > TodoItem.jsx
// import React, { useState } from "react";

import * as S from "../Main.style";
import CHECKBOX from "../../../assets/checkbox.png";
import CHECKBOXBLUE from "../../../assets/check-blue.png";
import { useState } from "react";

export default function TodoItem({todoText, todolist, setTodolist}) {
        const [isChecked, setIsChecked] = useState(false); //체크박스
        const [isEditing, setIsEditing] = useState(false); //수정상태
        const [editedText, setEditedText] = useState(todoText); //수정텍스트
    // 삭제
    const deleteTodo = () =>{
        setTodolist(todolist.filter((todo) => todo !== todoText));
    };

    // 수정 모드 전환 및 수정 완료 통합 (3항연산자 이용)
    const editTodo = () => {
      if (isEditing) {
        if (editedText.trim() === "") return;
        setTodolist(
          todolist.map((todo) =>
            todo === todoText ? editedText : todo
          )
        );
      }
      setIsEditing(!isEditing);
      setEditedText(todoText);
    };

    //체크박스
    const completeTodo = () => {
        setIsChecked(!isChecked);
    };

  return (
    <S.TodoItemLayout>
      <S.CheckboxAndTodoText>
        <S.CheckboxImgContainer onClick={completeTodo}>
          <S.CheckboxImg src={isChecked ? CHECKBOXBLUE : CHECKBOX} alt="체크박스" />
        </S.CheckboxImgContainer>
        {isEditing ? (
          <S.InputContainer
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            autoFocus
          />
        ) : (
          <S.TodoText style={{ textDecoration: isChecked ? "line-through" : "none" }}>
            {todoText}
          </S.TodoText>
        )}
      </S.CheckboxAndTodoText>
      <S.DeleteAndEditContainer>
        <S.DeleteAndEdit>
          <S.DeleteButton onClick={deleteTodo}>삭제</S.DeleteButton>
          <S.EditButton onClick={editTodo}>{isEditing ? "수정완료" : "수정"}</S.EditButton>
        </S.DeleteAndEdit>
      </S.DeleteAndEditContainer>
    </S.TodoItemLayout>
  );
}
