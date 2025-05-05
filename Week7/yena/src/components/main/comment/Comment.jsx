import React, { useEffect, useState } from "react";
import * as S from "../Main.style.jsx";
import CommentItem from "./CommentItem";
import CommentEditor from "./CommentEditor";

export default function Comment() {
    const [comment, setComment] = useState([]);
    const [inputText, setInputText] = useState("");

    const addComment = () => {
        if (inputText.trim() === "") return;
        setComment([...comment, inputText]);
        setInputText("");
    };

    useEffect(() => {
        console.log("댓글: " + comment)
    }, [comment]);

    return (
        <S.CommentLayout>
            <S.SectionTitle>✍️ 댓글 작성</S.SectionTitle>
            <CommentEditor
                inputText = { inputText }
                setInputText = { setInputText }
                addComment = { addComment }
            />
            <S.CommentWrapper>
                { comment.map((text, index) => (
                    <CommentItem
                        key = { index }
                        commentText = { text }
                        comment = { comment }
                        setComment = { setComment }
                    />
                ))}
            </S.CommentWrapper>
        </S.CommentLayout>
    );
}