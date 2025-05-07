import React, { useState, useEffect } from "react";
import CommentItem from "./CommentItem";
import CommentEditor from "./CommentEditor";
import * as S from "../Main.style";

export default function CommentList() {
    const [comments, setComments] = useState([]);
    const [inputText, setInputText] = useState("");

    const addComment = (text) => {
        setComments([...comments, text]);
    };

    const deleteComment = (text) => {
        setComments(comments.filter((comment) => comment !== text));
    };

    const changeComment = (target, newText) => {
        const change = [...comments];
        change[target] = newText;
        setComments(change);
    };

    useEffect(() => {
        console.log("댓글:", comments);
    }, [comments]);

    return (
        <S.CommentlistWrapper>
        <S.SectionTitle>📝 댓글 작성</S.SectionTitle>
        <CommentEditor 
            inputText={inputText}
            setInputText={setInputText}        
            onSubmit={addComment} 
        />
        {comments.map((text, index) => (
            <CommentItem
            key={index}
            index={index}
            text={text}
            onDelete={deleteComment}
            onUpdate={changeComment}
            />
        ))}
        </S.CommentlistWrapper>
    );
}
