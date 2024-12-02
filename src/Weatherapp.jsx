import Searchbox from './Searchbox1';
import InfoBox from './InfoBox1';
import { useState } from 'react';

export default function Weatherapp() {
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App</h2>
            <Searchbox setWeatherInfo={setWeatherInfo} setErrorMessage={setErrorMessage} />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {weatherInfo && <InfoBox {...weatherInfo} />}
        </div>
    );
}
