import styled from "styled-components";
import { useLocation } from 'react-router-dom';

const WeatherDiv = styled.div`
    padding: 25px;
    margin-bottom: 25px;
    font-size: 25px;
`;

const WeatherIconImg = styled.img`
    max-width: auto;
    height: 100px;
`;

const LocationDiv = styled.div`
    padding-bottom: 20px;

`;

const IconDiv = styled.div`
    padding-bottom: 20px;
`;

const TemperatureDiv = styled.div`
    padding-bottom: 20px;
`;

export default function Weather() {
  const page = useLocation();
  const location = page.state?.temperature[0];
  const temp = page.state?.temperature[1];
  const weather = page.state?.temperature[2];
  const weatherIconCode = page.state?.temperature[3]

  return (
    <WeatherDiv>
        <LocationDiv>
            {location ?? "Location Unavailable"}
        </LocationDiv>
        <IconDiv>
            <WeatherIconImg src = {WeatherIcon(weatherIconCode)} alt = "Weather Icon"/>
        </IconDiv>
        <TemperatureDiv>
            {temp ?? "Temperature Unavailable"}°C
        </TemperatureDiv>
        <div>
            {weather ?? "Weather Unavailable"}
        </div>
    </WeatherDiv>
  );
}

function WeatherIcon(weatherIconCode){
    const weatherIconPath = `/WeatherIcons/${weatherIconCode}.png`;
    
    
    return weatherIconPath;
}