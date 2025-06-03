import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';



const ButtonDiv = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
`

function SubmitButtonSearch() {
  const navigateWeatherPage = useNavigate();

  const navigationHandler = () => {
    navigateWeatherPage('/Weather');
  }

  return (
    <ButtonDiv>
      <Button onClick = {navigationHandler} variant = "contained" style = {{textTransform: 'none'}}>Search</Button>
    </ButtonDiv>
  );
}

function SubmitButtonWeather() {
  const navigateWeatherPage = useNavigate();

  const navigationHandler = () => {
    navigateWeatherPage('/Search');
  }

  return (
    <ButtonDiv>
      <Button onClick = {navigationHandler} variant = "contained" style = {{textTransform: 'none'}}>Search</Button>
    </ButtonDiv>
  );
}

export {SubmitButtonSearch, SubmitButtonWeather}