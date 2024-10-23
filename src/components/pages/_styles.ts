import styled from "styled-components";

const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 20px;

    &>div> a {
        text-decoration: none;
        color: #12569a;
    } // вложенность по порядку

    & > a.active {
        text-decoration: none;
        color: #f30e0e;
    }

    & > a.hover {
        color: #56a42a;
    }
`
export const S = {
    NavWrapper,
}