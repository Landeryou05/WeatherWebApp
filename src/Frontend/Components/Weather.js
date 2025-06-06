import styled from "styled-components";
import { useLocation } from 'react-router-dom';

const WeatherDiv = styled.div`
    padding: 25px;
    margin-bottom: 25px;
`;

const WeatherIconImg = styled.img`
    max-width: auto;
    height: 110px;
`;

export default function Weather() {
  const page = useLocation();
  const location = page.state?.temperature[0];
  const temp = page.state?.temperature[1];
  const weather = page.state?.temperature[2];
  const weatherIconCode = page.state?.temperature[3]

  return (
    <WeatherDiv>
        <div>
            {location ?? "Unavailable"}
        </div>
        <div>
            <WeatherIconImg src = {WeatherIcon(weatherIconCode)} alt = "Weather Icon"/>
        </div>
        <div>
            {temp ?? "Unavailable"}°C
        </div>
        <div>
            {weather ?? "Unavailable"}
        </div>
    </WeatherDiv>
  );
}

function WeatherIcon(weatherIconCode){
    const weatherIconPath = `/WeatherIcons/${weatherIconCode}.png`;
    
    
    return weatherIconPath;
}