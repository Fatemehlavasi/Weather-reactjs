import { Grid, Container, CircularProgress } from "@mui/material";
import WeatherCard from "../component/weatherCard";
import { useEffect, useState } from "react";
import { handleGetOneDayWeather } from "../api/api";
import SelectCity from "../component/SelectCity";
import Header from "../component/Header";
import img from "../images/image.jpeg"
import "../component/Styles.css"

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [city, setCity] = useState('tehran');
    const [cityWeather, setCityWeather] = useState({})

    const handleGetData = async () => {
        const data = await handleGetOneDayWeather(city)
        setCityWeather(data)
        setLoading(false)
    }

    useEffect(() => {
        handleGetData()
    }, [city])
    if (loading) {
        return <Grid container item xs={12} alignItems={'center'} justifyContent={'center'}>
            <CircularProgress />
        </Grid>
    }
    return (
        <Grid container alignItems={'center'} justifyContent={'center'} mt={5} flexDirection={'column'}  dir={'rtl'} >
            <Grid border={1} borderRadius={2} container item md={8} xs={12}  p={2} className={"hero"}>
            {/* <img width={"70px"} src={img} alt="jmbghgffxdgh" /> */}
                {/* <Container> */}
                    <Header />
                    {/* <Grid mt={5} bgcolor={"yellowgreen"} item display={"flex"} flexDirection={'column'} > */}
                        <SelectCity currency={city} setCurrency={setCity} cityWeather={cityWeather} />
                        <WeatherCard cityWeather={cityWeather} city={city} />
                    {/* </Grid> */}
                    {/* </Grid> */}
                {/* </Container > */}

            </Grid>
        </Grid>
    )
}

export default Home