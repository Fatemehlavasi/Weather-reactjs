import './App.css';
import {RouterProvider} from 'react-router-dom'
import {router} from "./router/router";
import {ThemeProvider} from "@mui/material";
import theme from './Theme/Theme';


function App() {
    return (
        <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
        </ThemeProvider>
    );
}

export default App;
