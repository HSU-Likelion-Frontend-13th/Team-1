import React from "react";
import styled from "styled-components";

const NavLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 100vw;
    height: 41.67vw;

    background-color: #4A86FF;
    color: #FFFFFF;
    font-family: "Inter";
    font-weight: 700;
    font-size: 4.17vw;
    line-height: 150%;
`;

export default function Nav() {
    return (
        <NavLayout>
        안녕하세요!<br />
        제 이름은 김예나입니다.<br />
        소통하는 개발자가 되고 싶어요.
        </NavLayout>
    );
}