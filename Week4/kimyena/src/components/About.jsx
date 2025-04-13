import styled from "styled-components";
import PROFILE from "../assets/about/profile.jpg";
import ADDRESS from "../assets/about/address.png";
import MAIL from "../assets/about/mail.png";
import PHONE from "../assets/about/phone.png";

const AboutLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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

const AboutContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 2.08vw;
`;

const AboutBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #FFFFFF;
    width: 19.79vw; /* 380px */
    height: 25.94vw; /* 498px */

    text-align: center;
    border-radius: 1.04vw; /* 20px */

    margin-bottom: 2.29vw; /* 44px */
`;

const AboutImage = styled.div`
    background-color: #EBEDF8;
    width: 10.23vw; /* 196.08px */
    height: 10.42vw; /* 200px */
    border-radius: 50%;
    margin-left: 4.79vw; /* 92px */
    margin-bottom: 1.3vw; /* 25px */
`;

const AboutImg = styled.img`
    width: 10.23vw; /* 196.08px */
    height: 10.42vw; /* 200px */
    border-radius: 50%;
`;

const Name = styled.div`
    color:#4A86FF;
    font-weight: 700;
    font-size: 2.08vw;
    margin-bottom: 1.35vw;
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const IconImg = styled.img`
    width: 2.08vw; /* 40px */
    height: 2.08vw; /* 40px */
    gap: 0.42vw; /* 8px */
    margin-right: 0.83vw; /* 16px */
    margin-left: 2.08vw; /* 40px */
    color: #BFC4D8;
`;

const AboutInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    align-items: flex-start;
    font-size: 0.83vw; /* 16px */
    color: #484A64;

    p {
        display: flex;
        align-items: center;
    }
`;

const AboutListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);    
    gap: 11.25vw;
`;

const H2 = styled.div`
    font-size: 1.67vw; /* 32px */
    font-weight: 800;
    margin-bottom: 1.2vw;
`;

const AboutList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #626682;
    font-weight: bold;
    font-size: 1.04vw;

    p {
        line-height: 170%;
    }
`;

const AboutItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
`;