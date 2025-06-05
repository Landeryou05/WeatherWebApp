import TextField from '@mui/material/TextField';

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

export {SearchBarSearch, SearchBarWeather}