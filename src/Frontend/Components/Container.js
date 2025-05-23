import styled from "styled-components"
import SearchPageHeading from "./Header";
import SearchBar from '../Components/SearchBar';

const SearchPageContainerDiv = styled.div`
    padding: 10px;  
    margin: auto;
    width: 50%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    box-shadow: 0 0 8px 8px #e0dfdf;
    border-radius: 17px;
    max-width: 350px;
`;

function SearchPageContainer(){
    return(
        <SearchPageContainerDiv>
            <SearchPageHeading/>
            <SearchBar/>
        </SearchPageContainerDiv>
    );
}

function WeatherPageContainer(){

}

export {SearchPageContainer, WeatherPageContainer}