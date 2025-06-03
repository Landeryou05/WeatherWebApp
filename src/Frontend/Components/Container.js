import styled from "styled-components"
import SearchPageHeading from "./Header";
import { SubmitButtonSearch, SubmitButtonWeather } from "./Button";
import { SearchBarSearch, SearchBarWeather } from "../Components/SearchBar";
import { Weather } from "./Weather";

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
    padding-left: 25px;
    padding-right: 25px;
`;

const WeatherPageContainerDiv = styled.div`
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
    padding-left: 25px;
    padding-right: 25px;
`;

const SearchFunctionDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

function SearchPageContainer(){
    return(
        <SearchPageContainerDiv>
            <SearchPageHeading/>
            <SearchFunctionDiv>
                <SearchBarSearch/>
                <SubmitButtonSearch/>
            </SearchFunctionDiv>
        </SearchPageContainerDiv>
    );
}

function WeatherPageContainer(){
    return(
        <WeatherPageContainerDiv>
        <SearchFunctionDiv>
            <SearchBarWeather/>
            <SubmitButtonWeather/>
        </SearchFunctionDiv>
        <Weather/>
        </WeatherPageContainerDiv>
    );
}

export {SearchPageContainer, WeatherPageContainer}