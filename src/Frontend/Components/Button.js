import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import MainAPI from '../../Backend/MainAPI';

const ButtonDiv = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
`

// Submit button for search page (landing page)
function SubmitButtonSearch() {
  const navigateWeatherPage = useNavigate(); // Enables navigation across multiple pages loaded within the App.js route implementation.

  const searchEventHandler = async () => { // Arrow function for event handler for API call.
    const textFieldElement = document.getElementById("SearchBarSearchTextField");
    const textFieldValue = textFieldElement.value; // Takes value entered by the user within the search box.
    const temperature = await MainAPI(textFieldValue);
    navigateWeatherPage('/Weather', {state: {temperature}}); // Returns state (in this case, an array) to weather page.
  }

  return (
    <ButtonDiv>
      <Button type = "submit" onClick = {searchEventHandler} variant = "contained" style = {{textTransform: 'none'}}>Search</Button>
    </ButtonDiv>
  );
}

function SubmitButtonWeather() {
  const navigateWeatherPage = useNavigate();
  const searchEventHandler = async () => {
    const textFieldElement = document.getElementById("SearchBarWeatherTextField");
    const textFieldValue = textFieldElement.value;
    const temperature = await MainAPI(textFieldValue);
    navigateWeatherPage('/Weather', {state: {temperature}});
  }

  return (
    <ButtonDiv>
      <Button type = "submit" onClick = {searchEventHandler} variant = "contained" style = {{textTransform: 'none'}}>Search</Button>
    </ButtonDiv>
  );
}

export { SubmitButtonSearch, SubmitButtonWeather }; // Export functions for import from container.js.