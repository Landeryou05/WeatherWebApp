import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { WeatherAPI } from "./Weather";

const ButtonDiv = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
`

function SubmitButtonSearch() {
  const navigateWeatherPage = useNavigate();

  const searchEventHandler = () => {
    navigateWeatherPage('/Weather');
    WeatherAPI();
  }

  return (
    <ButtonDiv>
      <Button onClick = {searchEventHandler} variant = "contained" style = {{textTransform: 'none'}}>Search</Button>
    </ButtonDiv>
  );
}

function SubmitButtonWeather() {
  const searchEventHandler = () => {
    WeatherAPI();
  }

  return (
    <ButtonDiv>
      <Button onClick = {searchEventHandler} variant = "contained" style = {{textTransform: 'none'}}>Search</Button>
    </ButtonDiv>
  );
}

export { SubmitButtonSearch, SubmitButtonWeather }