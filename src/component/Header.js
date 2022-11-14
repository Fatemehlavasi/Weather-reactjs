import {Grid, Typography} from "@mui/material";

const Header = () => {
    return(
        <Grid item xs={12} bgcolor={"#1D3973"} p={2} borderRadius={2} >
            <Typography variant={'h5'}>
                Weather App
            </Typography>
        </Grid>
    )
}

export default Header