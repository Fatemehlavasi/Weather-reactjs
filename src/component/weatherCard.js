import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AirIcon from '@mui/icons-material/Air';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
const WeatherCard = ({ cityWeather, city }) => {
    return (
        <Grid container justifyContent={"center"} item xs={12} p={2} dir={'rtl'} mt={6}>
            <Grid item xs={12} md={4} bgcolor={'primary.dark'} borderRadius={2} color={'common.white'} p={5}>
                <Grid display={"flex"} p={1}>
                    <LocationCityIcon />
                    <Typography variant={'body1'}>
                        شهر: {cityWeather.name}
                    </Typography>
                </Grid>
                <Grid mt={1} >
                    <AirIcon />
                    <Typography mr={1} variant={'body1'}>
                        سرعت باد: {cityWeather?.wind?.speed}
                    </Typography>
                </Grid>
                <Grid mt={1} >
                    <FilterDramaIcon />
                    <Typography variant={'body1'}>
                        میزان ابری بودن: {cityWeather?.clouds?.all}
                    </Typography>
                </Grid>
                <Grid mt={1} >
                    <ThermostatAutoIcon />
                    <Typography variant={'body1'}>
                        دما: {cityWeather?.main?.temp}
                    </Typography>
                </Grid>
                <Grid mt={1} mb={3}>
                    <WbSunnyIcon />
                    <Typography variant={'body1'}>
                        وضعیت هوا: {cityWeather?.weather?.[0]?.description}
                    </Typography>
                </Grid>
                <Link to={`/weather/${city}`}>
                    <Grid xs={12}  >
                        <Button variant="mainButton" fullWidth sx={{ bgcolor: 'common.000000' }}  >
                            {'مشاهده 4 روز آینده'}
                        </Button>
                    </Grid>

                </Link>
            </Grid>
        </Grid>
    )
}

export default WeatherCard