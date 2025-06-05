export default function APICall(LocationName){
    LocationAPI(LocationName)
}

async function LocationAPI(LocationName){
    const APIKey = process.env.REACT_APP_WEATHER_WEB_APP_API_KEY;

    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${LocationName}&appid=${APIKey}`);
    const data = await response.json();

    const lat = data[0].lat;
    const lon = data[0].lon;

    WeatherAPI(lat, lon);
}

async function WeatherAPI(lat, lon){
    const APIKey = process.env.REACT_APP_WEATHER_WEB_APP_API_KEY;
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`);
    const data = await response.json();

    const temperature = data.main.temp;
    console.log(temperature)
}