import TextField from '@mui/material/TextField';

function SearchBarSearch() {
  return (
    <TextField label = "Location" variant = "outlined" color = "black"/>
  );
}

function SearchBarWeather() {
  return (
    <TextField label = "New Location" variant = "outlined" color = "black"/>
  );
}

export {SearchBarSearch, SearchBarWeather}