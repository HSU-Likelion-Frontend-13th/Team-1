import styled from "styled-components";

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

const Name = styled.div`
    color:#4A86FF;
    font-weight: 700;
    font-size: 2.08vw;
    margin-bottom: 1.35vw;
`;