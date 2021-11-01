import React from "react";
import { Container, CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';

// local imports
import NavBar from './NavBar';
import theme from '../theme';

const App = () => {
    return (
        <ThemeProvider theme={theme} >
            <CssBaseline/>
            <NavBar />
        </ThemeProvider>
    );
}

export default App;