import * as S from "./Header.style.jsx";
import CHECK from "../../assets/comment.png";

export default function Header() {
    return (
        <S.HeaderLayout>
            <S.Icon src = { CHECK } />
            <S.Title>Comment</S.Title>
        </S.HeaderLayout>
    );
}