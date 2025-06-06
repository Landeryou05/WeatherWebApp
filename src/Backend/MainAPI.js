import LocationAPI from "./LocationAPI";

export default async function MainAPI(LocationName){
    const weatherData = await LocationAPI(LocationName);
    return weatherData;
}