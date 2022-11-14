import { Grid } from "@mui/material";
import WeatherCard from "../component/weatherCard";
import { useEffect, useState } from "react";
import { handleGetOneDayWeather } from "../api/api";
import SelectCity from "../component/SelectCity";
import Header from "../component/Header";

const Home = () => {
    const [city, setCity] = useState('tehran');
    const [cityWeather, setCityWeather] = useState({})

    const handleGetData = async () => {
        const data = await handleGetOneDayWeather(city)
        setCityWeather(data)
    }

    useEffect(() => {
        handleGetData()
    }, [city])

    return (
        <Grid container alignItems={'center'} justifyContent={'center'} flexDirection={'column'} p={2} dir={'rtl'} height={"100vh"}>
            <Grid item height={"600px"} p={1} width={'1200px'} bgcolor={"#1A3670"}>
                <Header />
                <SelectCity currency={city} setCurrency={setCity} />
                <WeatherCard cityWeather={cityWeather} city={city} />
            </Grid>
        </Grid>
    )
}

export default Home