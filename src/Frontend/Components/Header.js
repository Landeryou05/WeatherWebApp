import styled from "styled-components";

const Greeting = styled.p`
      background-color: white;
`;

const Instruction = styled.p`
      background-color: white;
`;

const HeaderContainer = styled.div`
          background-color: white;
`;

function SearchPageHeading(){
    return(
        <HeaderContainer>
            <Greeting>
                Hello
            </Greeting>
            <Instruction>
                Enter a Location
            </Instruction>
        </HeaderContainer>
    );
}

export default SearchPageHeading;