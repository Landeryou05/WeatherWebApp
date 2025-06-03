import './App.css';

import { Routes, Route } from "react-router-dom";
import SearchPage from "../Frontend/Pages/Search";
import WeatherPage from "../Frontend/Pages/Weather";

import { Navigate } from 'react-router-dom';


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to = "/Search" replace />} />

        <Route path = "/Search" element = {<SearchPage />} />
        <Route path = "/Weather" element = {<WeatherPage />} />
      </Routes>
    </div>
  );
}
