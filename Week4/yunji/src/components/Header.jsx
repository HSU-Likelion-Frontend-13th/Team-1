import styled from "styled-components";

const HeaderLayout = styled.header`
    display: flex;
    justify-content: conter;
    align-items: center;
    background: white;
    height: 6.25vw;
`;

const H3 = styled.h3`
    color: #4A86FF;
    margin: 0;
    font-size: 3.88rem;
`;

const Nav = styled.nav`
    margin-left: 17.08vw;
    a {
        text-decoration: none;
        color: black;
        margin: 1.67vw;
        font-size: 2rem;
    }
`;

export default function Header() {
    return (
    <HeaderLayout>
        <H3>PORTFOLIO.</H3>
        <Nav>
            <a href="#about">ABOUT</a>
            <a href="#hobby">HOBBY</a>
            <a href="#contact">CONTACT</a>
        </Nav>
    </HeaderLayout>
    );
}