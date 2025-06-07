import WeatherAPI from "./WeatherAPI";

export default async function LocationAPI(LocationName){
    try {
        const APIKey = process.env.REACT_APP_WEATHER_WEB_APP_API_KEY;

        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${LocationName}&appid=${APIKey}`);
        const data = await response.json();

        const lat = data[0].lat;
        const lon = data[0].lon;

        const weatherArray = WeatherAPI(lat, lon);
        return weatherArray;  
    } catch (error) {
        return error;
    }
}