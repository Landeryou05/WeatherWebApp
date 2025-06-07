import TextField from '@mui/material/TextField';

// Functions that enables text entries.
function SearchBarSearch() {
  return (
    <TextField id = "SearchBarSearchTextField" label = "Location" variant = "outlined" color = "black"/>
  );
}

function SearchBarWeather() {
  return (
    <TextField id = "SearchBarWeatherTextField" label = "New Location" variant = "outlined" color = "black"/>
  );
}

export {SearchBarSearch, SearchBarWeather} // Export functions to be used within Container.js.