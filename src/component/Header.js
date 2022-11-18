import { Grid, Typography } from "@mui/material";
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
const Header = () => {
    return (
        <Grid container item xs={12} bgcolor={"#FFAC42"} color={"#FFF"} p={2} borderRadius={2}  justifyContent={"space-between"}>
            <Grid item>
                <Typography variant={'h5'}>
                    وضعیت آب و هوا
                </Typography>
            </Grid>
            <Grid item>
                <FilterDramaIcon />
            </Grid>


        </Grid>
    )
}

export default Header