import styled from "styled-components";

const HeaderContainer = styled.div`
    background-color: white;
`;

const Greeting = styled.p`
    background-color: white;
    font-size: 30px;
`;

const Instruction = styled.p`
    background-color: white;
    font-size: 20px;
`;

// Default function to render heading for search page (landing page)
export default function SearchPageHeading(){
    return(
        <HeaderContainer>
            <Greeting>
                Hello,
            </Greeting>
            <Instruction>
                Enter a Location
            </Instruction>
        </HeaderContainer>
    );
}