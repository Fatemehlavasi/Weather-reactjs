import WeatherFutureCard from "../component/weatherFutureCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { handleGetFiveDayWeather } from "../api/api";
import { Button, Grid, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import DeleteIcon from '@mui/icons-material/Delete';
import "../component/Styles.css"
import LocationCityIcon from '@mui/icons-material/LocationCity';
const daysIndex = [0, 8, 16, 24]

const SinglePage = () => {
    const [cityWeatherFuture, setCityWeatherFuture] = useState({})
    const { city } = useParams()

    const handleGetData = async () => {
        const data = await handleGetFiveDayWeather(city)
        setCityWeatherFuture(data)
    }

    useEffect(() => {
        handleGetData()
    }, [])

    return (
        <Grid container item dir={'rtl'} alignItems={'center'} justifyContent={'center'} md={12} flexDirection={"column"} >
            <Grid mt={"5"} className={"hero1"}>
                <Header />
                <Grid container item md={12} bgcolor={"#000"} className={"opacity"} flexDirection={"column"} mt={5}>
                    <Grid item>
                        <Typography variant="h1" color={"#fff"} pr={3} >{city}</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h2" p={3} color={"#fff"}>{" وضعیت آب و هوا در 4 روز آینده  "}</Typography>
                    </Grid>
                    <Grid xs={12} p={3} mt={5}  >
                        <Link to={"/"}>
                            <Typography color={"#fff"} border={1} p={2} borderRadius={2} textAlign={"center"}>  {"بازگشت به صفحه اصلی"} </Typography>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item md={12} display={"flex"} justifyContent={"space-around"} flexWrap={"wrap"}>
                    {daysIndex.map(index => <WeatherFutureCard key={index} index={index}
                        cityWeatherFuture={cityWeatherFuture} />)}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SinglePage