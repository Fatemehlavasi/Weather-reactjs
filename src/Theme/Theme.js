import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    direction: 'rtl',
    components: {
    MuiButton:{
        variants:[
          {props:{variant:'mainButton'},
           style:{
            color: '#fff',
            backgroundColor: 'rgb(66, 133, 242)',
            borderRadius: '4px',
            textAlign: 'center',
            padding:12,
            width:'100%',
           '&:hover': {
            backgroundColor: 'rgb(66, 133, 242)',
           }
           }
        },        
        {
          props: {variant: 'secondaryButton'},
          style: {
           color:"#727272",
           borderRadius: '4px',
           height: 35
            
          }
        }
  
        ]
      },
  
      MuiCssBaseline: {
        styleOverrides:{
          body: {
  
           boxSizing:'border-box',
           '.flexDir': {
             '@media only screen and (max-width:590px)':{
                  flexDirection:'column'
              }
            },
            'a': {
               textDecoration:'none'
            },
            
        }
  
        }
  
      },
    },
    palette: {
        primary: {
            main: '#673ab7',
            dark: '#311b92',
            light: '#9575cd',
        },
        common:{
            white: '#ffffff',
            black: '#000000'
        },
        warning:{
            main: '#ffeb3b',
            dark: '#fbc02d',
            light: '#ffee58',
        },
        error:{
            main: '#d32f2f',
            dark: '#b71c1c',
            light: '#ef5350',
        },
        success:{
            main: '#388e3c',
            dark: '#1b5e20',
            light: '#4caf50',
        },
        secondary:{
            main: '#1565c0',
            dark: '#0d47a1',
            light: '#1976d2',
        }
    },
   
});

export default theme;