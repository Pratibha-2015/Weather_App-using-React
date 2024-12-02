import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css";
import { useState } from 'react';

export default function SearchBox({ setWeatherInfo, setErrorMessage }) {
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    const API_KEY = "7367082dc70201f6542d8ede8278ab68";

    let getWetherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let jsonresponse = await response.json();
            if (jsonresponse.cod !== 200) {
                throw new Error("City not found");
            }
            let result = {
                city: jsonresponse.name,
                temp: jsonresponse.main.temp,
                tempMin: jsonresponse.main.temp_min,
                tempMax: jsonresponse.main.temp_max,
                humidity: jsonresponse.main.humidity,
                weather: jsonresponse.weather[0].description,
            };
            setWeatherInfo(result);
            setErrorMessage("");
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setErrorMessage("Invalid city. Please try again.");
            setWeatherInfo(null);  // Reset weather data if the city is invalid
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = (evt) => {
        evt.preventDefault();
        if (!city.trim()) {
            console.log("City name cannot be empty");
            return;
        }
        getWetherInfo();
        setCity("");
    };

    return (
        <div className="Searchbox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city-name"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /> <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
        </div>
    );
}
