# Weather Web Application

## Description
- This is a react web application that allows the user to enter a location, then displays information based on input through 2 APIs (both [OpenWeatherMap](https://openweathermap.org/)).

<img src="/public/ReadmeImages/1.jpg" alt="Description" width="300"/>
<img src="/public/ReadmeImages/2.jpg" alt="Description" width="300"/>
<img src="/public/ReadmeImages/3.jpg" alt="Description" width="300"/>


## Prerequisites
- Node.js (v14 or later).
- npm.

## Installation
### Clone the repository
```bash
git clone https://github.com/Landeryou05/weather-app.git
```
```bash
cd weather-app
```

### Install dependencies
```bash
npm install
```

### Run Application
```bash
npm start
```

## API Key Setup
- Navigate to [OpenWeatherMap](https://openweathermap.org/) and generate your own API key (NOTE: Wait a few hours after generating as it can sometimes take a while to warm up).
- Create a .env file within the root directory of the project.
- Copy this line and replace "**ENTER YOUR API KEY**" with your API key.
```bash
REACT_APP_WEATHER_WEB_APP_API_KEY=**ENTER YOUR API KEY**
```
