import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import APICall from '../../Backend/WeatherAPI';

const ButtonDiv = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
`

function SubmitButtonSearch() {
  const navigateWeatherPage = useNavigate();

  const searchEventHandler = () => {
    const textFieldElement = document.getElementById("SearchBarSearchTextField");
    const textFieldValue = textFieldElement.value;
    APICall(textFieldValue);
    navigateWeatherPage('/Weather');
  }

  return (
    <ButtonDiv>
      <Button onClick = {searchEventHandler} variant = "contained" style = {{textTransform: 'none'}}>Search</Button>
    </ButtonDiv>
  );
}

function SubmitButtonWeather() {
  const searchEventHandler = () => {
    const textFieldElement = document.getElementById("SearchBarWeatherTextField");
    const textFieldValue = textFieldElement.value;
    APICall(textFieldValue);
  }

  return (
    <ButtonDiv>
      <Button onClick = {searchEventHandler} variant = "contained" style = {{textTransform: 'none'}}>Search</Button>
    </ButtonDiv>
  );
}

export { SubmitButtonSearch, SubmitButtonWeather };