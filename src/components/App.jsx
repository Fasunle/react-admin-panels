import React from "react";
import { Stack , CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import { BrowserRouter as Router } from "react-router-dom";
// local imports
import Header from './Header';
import theme from '../theme';
import SidebarNavigation from "./Sidebar";
import Content from "./Contents";

const App = () => {
    return (
        <ThemeProvider theme={theme} >
            <CssBaseline/>      {/**override any browser default */}
            <Router>
                <Header />
                <Stack direction="row" sx={{marginTop: '5rem'}}>
                    <SidebarNavigation />
                    <Content/>
                </Stack>
            </Router>
        </ThemeProvider>
    );
}

export default App;