import styled from "styled-components";

const Contents = styled.div`
    h1 {
        font-size: 5rem;
        text-align: center;
        background: #4A86FF;
        color: white;
        padding: 11.56vw;
        margin: 0;
    }
`;

export default function Content() {
    return (
        <Contents>
            <h1>
                안녕하세요!<br />
                제 이름은 조윤지입니다.<br />
                소통하는 개발자가 되고 싶어요.
            </h1>
        </Contents>
    );
}