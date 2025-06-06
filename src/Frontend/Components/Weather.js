import styled from "styled-components";
import { useLocation } from 'react-router-dom';

const WeatherDiv = styled.div`
    padding: 25px;
    margin-bottom: 25px;
`;

export default function Weather() {
  const location = useLocation();
  const temperature = location.state?.temperature;

  return (
    <WeatherDiv>
      {temperature ?? "Not available"}°C
    </WeatherDiv>
  );
}