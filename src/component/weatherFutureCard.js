import { Grid, Typography } from "@mui/material";
import AirIcon from '@mui/icons-material/Air';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "../component/Styles.css"

const WeatherFutureCard = ({ cityWeatherFuture, index }) => {
    return (
        <Grid container item borderRadius={8} md={5} p={3} bgcolor={"#000"} flexDirection={"column"} border={1} my={2} className={"opacity"}>
            <Grid item mt={2} display={"flex"} color={"#fff"} >
                <AirIcon />
                <Typography mr={1} variant={'body1'} pr={2} >
                    سرعت باد: {cityWeatherFuture?.[index]?.wind?.speed}
                </Typography>
            </Grid >
            <Grid item mt={2} display={"flex"} color={"#fff"}>
                <FilterDramaIcon />
                <Typography variant={'body1'} pr={2} >
                    میزان ابری بودن:   {cityWeatherFuture?.[index]?.clouds?.all}
                </Typography>
            </Grid>
            <Grid item mt={2} display={"flex"} color={"#fff"}>
                <ThermostatAutoIcon />
                <Typography variant={'body1'} pr={2} >
                    دما: 0 {cityWeatherFuture?.[index]?.main?.temp}
                </Typography>
            </Grid>
            <Grid item mt={2} mb={3} display={"flex"} color={"#fff"} >
                <WbSunnyIcon />
                <Typography variant={'body1'} pr={2} >
                    وضعیت هوا:{cityWeatherFuture?.[index]?.weather?.[0]?.description}
                </Typography>
            </Grid>
        </Grid>

    )
}

export default WeatherFutureCard
