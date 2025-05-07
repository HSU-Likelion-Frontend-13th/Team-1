import React from "react";
import { useState, useEffect } from "react";
import TodoEditor from "./TodoEditor";
import * as S from "../Main.style";
import TodoItem from "./Todoitem";
export default function Todolist() {
  const [todolist, setTodolist] = useState([]);
  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    if(inputText.trim() === "") return;
    setTodolist([...todolist, inputText]); // todolist 배열에 할일텍스트를 넣는다다
    setInputText(""); // 입력창 초기화
  };

  useEffect(()=>{
    console.log("댓글 :" +todolist)
  },[todolist]);

  return (
    <S.TodoListLayout>
      <S.SectionTitle>📝 댓글 작성</S.SectionTitle>
      <TodoEditor 
      inputText={inputText}
      setInputText={setInputText}
      addTodo={addTodo}
      />
      <S.TodoListWrapper>
        {todolist.map((todo, index) => (
          <TodoItem
            key={index}
            todoText={todo}
            todolist={todolist}
            setTodolist={setTodolist}
          />
        ))}
        
      </S.TodoListWrapper>
    </S.TodoListLayout>
  );
}
