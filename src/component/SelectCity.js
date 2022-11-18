import {Grid, TextField , Typography} from "@mui/material";
import {Cities} from "../data/cities";
import MenuItem from '@mui/material/MenuItem';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import "../component/Styles.css"
const SelectCity = ({city, setCurrency , cityWeather}) => {

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <>
           <Grid bgcolor={"#000"} my={5} className={"opacity"} display={"flex"}  justifyContent={"space-between"}  mt={5}  xs={12} md={12}>
           <Grid md={4} display={"flex"} alignItems={"center"}>
                <LocationCityIcon />
                <Typography variant={'h2'} color={"#fff"}  pr={2} >
                    شهر: {cityWeather.name}
                </Typography>
            </Grid>
            <Grid md={12} xs={8}>
            <TextField  fullWidth required id="filled-select-currency" select label="Select"  name={'group'} value={city} onChange={handleChange}  variant="filled">
                {Cities.map((c) => (
                    <MenuItem  key={c.title} value={c.title}>
                        {c.name}
                    </MenuItem>
                ))}
            </TextField>
            </Grid>
         
           </Grid>
          
      </>
    )
}

export default SelectCity