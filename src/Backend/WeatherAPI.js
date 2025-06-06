export default async function WeatherAPI(lat, lon){
    const APIKey = process.env.REACT_APP_WEATHER_WEB_APP_API_KEY;
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`);
    const data = await response.json();

    const location = data.name;
    const temperature = data.main.temp;
    const weather = data.weather[0].main;
    const weatherIconCode = data.weather[0].icon;

    const formattedTemperature = () => {
        let formattedTemperature = Math.round((temperature - 273.15));
        return formattedTemperature;
    }

    const weatherDataArray = [location, formattedTemperature(), weather, weatherIconCode]

    return weatherDataArray;
}