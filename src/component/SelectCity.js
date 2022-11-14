import {Grid, TextField} from "@mui/material";
import {Cities} from "../data/cities";
import MenuItem from '@mui/material/MenuItem';
const SelectCity = ({city, setCurrency}) => {

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <>
             {/* <TextField select value={city} onChange={handleChange} SelectProps={{native: true}} variant="filled">
                 {Cities.map((c) => (
                     <option key={c.title} value={c.title}>
                         {c.name}
                     </option>
                 ))}
             </TextField> */}
            <TextField sx={{width:"200px"}} required id="filled-select-currency" select label="Select"  name={'group'} value={city} onChange={handleChange}  variant="filled">
                {Cities.map((c) => (
                    <MenuItem sx={{width:"200px"}} key={c.title} value={c.title}>
                        {c.name}
                    </MenuItem>
                ))}
            </TextField>
      </>
    )
}

export default SelectCity