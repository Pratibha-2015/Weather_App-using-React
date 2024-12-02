import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./infoBox.css";

export default function InfoBox({ city, temp, tempMin, tempMax, humidity, weather }) {
    const INTI_URL = "https://images.unsplash.com/photo-1716237718344-5adb151b3ddf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    if (!city) {
        return null; // Do not render anything if there is no city data
    }

    return (
        <div className="InfoBox">
            <div className="contentInfo">
                <Card sx={{ maxWidth: 347, width: "50%" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={INTI_URL}
                            alt={`${city} weather`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {city}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                <p><b>Weather:</b> {weather}</p>
                                <p><b>Temperature:</b> {temp}&deg;C</p>
                                <p><b>Humidity:</b> {humidity}%</p>
                                <p><b>Min Temp:</b> {tempMin}&deg;C</p>
                                <p><b>Max Temp:</b> {tempMax}&deg;C</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}
