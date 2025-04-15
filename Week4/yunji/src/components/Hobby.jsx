import styled from "styled-components";
import MUSIC from "../assets/music.jpg";
import DRUM from "../assets/drum.jpg";
import TRAVEL from "../assets/travel.jpeg";

const Section = styled.section``;

const H2 = styled.h2`
    color: #4A86FF;
    font-size: 3.65vw;
    text-align: center;
`;

const HobbyBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.1vw;
`;

const HobbyMenu = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 16px;
`;

const H3 = styled.h3`
    font-size: 32px;
    background-color: #4A86FF;
    color: white;
    text-align: center;
    margin: 0;
    padding: 20px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`;

const HobbyImage = styled.div`
    padding: 40px;

    img {
        width: 300px;
        height: 220px;
    }
`;

export default function Hobby() {
    return (
        <Section>
            <H2>HOBBY</H2>
            <HobbyBox>
                <HobbyMenu>
                    <H3>음악 듣기</H3>
                    <HobbyImage>
                        <img src={MUSIC} alt="음악" />
                    </HobbyImage>
                </HobbyMenu>
                <HobbyMenu>
                    <H3>드럼 치기</H3>
                    <HobbyImage>
                        <img src={DRUM} alt="드럼" />
                    </HobbyImage>
                </HobbyMenu>
                <HobbyMenu>
                    <H3>여행 가기</H3>
                    <HobbyImage>
                        <img src={TRAVEL} alt="여행" />
                    </HobbyImage>
                </HobbyMenu>
            </HobbyBox>
        </Section>
    );
}