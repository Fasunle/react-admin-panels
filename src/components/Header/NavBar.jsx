import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar,Typography} from '@mui/material';

export default ()=> {
  return (
    <Box sx={{
      flexGrow: 1
    }}>
      <AppBar>
        <Toolbar>
          <IconButton>
            <MenuIcon/>
          </IconButton>
          <Typography variant='body1'>
            Johort
          </Typography>
        </Toolbar>
      </AppBar>
      Navigation Header
    </Box>
  )
}