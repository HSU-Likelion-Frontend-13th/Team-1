import styled from "styled-components";
import PROFILE from "../assets/profile.png";
import CALL from "../assets/call.svg";
import EMAIL from "../assets/email.svg";
import MAP from "../assets/map.svg";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const H2 = styled.h2`
    color: #4A86FF;
    font-size: 3.65vw;
`;

const Aboutbox = styled.div`
    display: flex;
    justify-content: center;
    gap: 2.08vw;
    margin-left: 370px;
    margin-right: 370px;
`;

const Profile = styled.div`
    background-color: white;
    padding: 1.56vw;
    border-radius: 16px;
`;

const H3 = styled.h3`
    font-size: 2.08vw;
    color: #4A86FF;
    text-align: center;
`;

const Items = styled.div``;

const ItemsCard = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    p {
        font-size: 1.56vw;
        color: #484A64;
    }

    img {
        width: 2.7vw;
        height: 2.7vw;
        margin: 0;
    }
`;

const Details = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10vw;

    h3 {
        font-size: 2rem;
        color : black;
    }
`;

export default function About() {
    return (
        <Section>
        <H2>ABOUT</H2>
        <Aboutbox>
            <Profile>
                <img src={PROFILE} alt="프로필" />
                <H3>조윤지</H3>
                <Items>
                    <ItemsCard>
                        <img src={CALL} alt="" />
                        <p>010-6462-8533</p>
                    </ItemsCard>
                    <ItemsCard>
                        <img src={EMAIL} alt="" />
                        <p>yunji8533@naver.com</p>
                    </ItemsCard>
                    <ItemsCard>
                        <img src={MAP} alt="" />
                        <p>서울특별시 성북구 삼선교로 16길 116 (한성대학교)</p>
                    </ItemsCard>
                </Items>
            </Profile>
            <Details>
                <div>
                    <H3>EDUCATION</H3>
                    <p>한성대학교 컴퓨터공학부</p>
                    <p>2023.03~</p>
                </div>
                <div>
                    <H3>SKILLS</H3>
                    <p>Python</p>
                    <p>Java</p>
                    <p>C++</p>
                    <p>JavaScript</p>
                </div>
                <div>
                    <H3>WORK</H3>
                    <p>프론트엔드 개발자</p>
                </div>
                <div>
                    <H3>ACTIVITIES</H3>
                    <p>멋쟁이사자처럼 13기</p>
                </div>
            </Details>
        </Aboutbox>
    </Section>
    )
}