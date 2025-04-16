import React from "react";
import styled from "styled-components";
import HOBBY1 from "../assets/hobby/1.jpg";
import HOBBY2 from "../assets/hobby/2.jpg";
import HOBBY3 from "../assets/hobby/3.jpg";

const HobbyLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 19.38vw; /* 370px */
    gap: 1.04vw;
`;

const H1 = styled.div`
    color: #4A86FF;
    text-align: center;
    font-size: 3.65vw; /* 70px */
    font-weight: 800;
    margin-top: 3.13vw; /* 60px */
    margin-bottom: 3.07vw; /* 59px */
    gap: 39.44vw;
`;

const HobbyTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p {
        background-color: #4A86FF;
    
        color: #FFFFFF;
        text-align: center;
        font-size: 1.67vw; /* 32px */
        font-weight: 700;
        padding-top: 1.1vw; /* 21px */
    
        width: 19.79vw; /* 380px */
        height: 4.17vw; /* 80px */

        border-radius: 1.04vw 1.04vw 0 0; /* 20px 20px 0 0*/
    }
`;

const HobbyBox = styled.div`
    background-color: #FFFFFF;
    text-align: center;

    width: 19.79vw; /* 380px */
    height: 15.46vw; /* 297px */

    margin-bottom: 17.83vw; /* 342px */
    border-radius: 0 0 1.04vw 1.04vw;
`;

const HobbyImg = styled.img`
    width: 15.62vw; /* 300px */
    height: 11.46vw; /* 220px */
    margin-top: 1.93vw; /* 37px */
    align-items: center;
    border-radius: 1.04vw; /* 20px */
`;

export default function Hobby() {
    return (
        <HobbyLayout>
            <HobbyTitle>
                <p>야구 보러 가기</p>
                <HobbyBox>
                    <HobbyImg src = {HOBBY1} />
                </HobbyBox>
            </HobbyTitle>
            <HobbyTitle>
                <p>음악 듣기</p>
                <HobbyBox>
                    <HobbyImg src = {HOBBY2} />
                </HobbyBox>
            </HobbyTitle>
            <HobbyTitle>
                <p>뜨개질하기</p>
                <HobbyBox>
                    <HobbyImg src = {HOBBY3} />
                </HobbyBox>
            </HobbyTitle>
        </HobbyLayout>
    );
}