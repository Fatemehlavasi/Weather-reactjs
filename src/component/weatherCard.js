import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../component/Styles.css"
import AirIcon from '@mui/icons-material/Air';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
const WeatherCard = ({ cityWeather, city }) => {
    return (
        <Grid container justifyContent={"center"} item dir={'rtl'} md={12} xs={12} bgcolor={"#000"} my={5} className={"opacity"}>
            <Grid item my={7} p={2} xs={12} md={10} justifyContent={"space-between"} flexWrap={"wrap"} borderRadius={2} color={'common.white'} display={"flex"}  >
                <Grid border={1} borderRadius={5} md={2.5} sm={2.5} xs={5} justifyContent={"flex-end"} >
                    <Grid >
                        <Typography variant={'body1'} textAlign={"center"} >
                            <AirIcon />
                        </Typography>
                        <Typography variant={'body1'} textAlign={"center"}>
                            0 {cityWeather?.wind?.speed}
                        </Typography>
                    </Grid>
                    <Grid mt={5}>
                        <Typography variant={'body1'} textAlign={"center"}>
                            سرعت باد
                        </Typography>
                    </Grid>
                </Grid >
                <Grid border={1} borderRadius={5} md={2.5} sm={2.5} xs={5}>
                    <Grid >
                        <Typography variant={'body1'} textAlign={"center"}>

                            <FilterDramaIcon />
                        </Typography>

                        <Typography variant={'body1'} textAlign={"center"}>
                            0  {cityWeather?.clouds?.all}
                        </Typography>
                    </Grid>
                    <Grid mt={5}>
                        <Typography variant={'body1'} textAlign={"center"}>
                            میزان ابری بودن
                        </Typography>
                    </Grid>
                </Grid>
                <Grid border={1} borderRadius={5} md={2.5} sm={2.5} xs={5}>
                    <Grid>
                        <Typography variant={'body1'} textAlign={"center"}>
                            <ThermostatAutoIcon />
                        </Typography>
                        <Typography variant={'body1'} textAlign={"center"}>
                            0  {`${cityWeather?.main?.temp}ºC`}
                        </Typography>
                    </Grid>
                    <Grid mt={5}>
                        <Typography variant={'body1'} textAlign={"center"}>
                            دما
                        </Typography>
                    </Grid>
                </Grid>
                <Grid border={1} borderRadius={5} md={2.5} sm={2.5} xs={5}>
                    <Grid>
                        <Typography variant={'body1'} textAlign={"center"}>
                            <WbSunnyIcon />
                        </Typography>
                        <Typography variant={'body1'} textAlign={"center"}>
                            0   {cityWeather?.weather?.[0]?.description}
                        </Typography>
                    </Grid>
                    <Grid mt={5}>
                        <Typography variant={'body1'} textAlign={"center"}>
                            وضعیت آب و هوا
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} bgcolor={"#000"}  >
                <Link to={`/weather/${city}`}>
                    <Typography variant="h2" color={"#fff"} textAlign={"center"}>
                        {'مشاهده 4 روز آینده'}
                    </Typography>
                </Link>
            </Grid>
        </Grid>
    )
}
export default WeatherCard