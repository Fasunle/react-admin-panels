import { useState } from 'react';
import {
  AppBar,
  Avatar, 
  Box,
  IconButton,
  Badge,
  Toolbar,
  Typography
} from '@mui/material';
import { 
  MoreVert as MoreIcon,
  Mail as MailIcon, 
  Menu as MenuIcon, 
  Notifications as NotificationsIcon 
} from '@mui/icons-material';
// local imports
import { AdminProfile } from './AdminProfile';
import { MobileMenu } from './MobileMenu';

export default ()=> {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAchorEl, setMobileAnchorEl] = useState(null);
  const open  = Boolean(anchorEl);
  const openMobileMenu  = Boolean(mobileAchorEl);

  const handleClick = (event)=> {
    console.log(event.currentTarget)
    setAnchorEl(event.currentTarget)
  }
  const handleMobileMenuClick = (event)=> {
    setMobileAnchorEl(event.currentTarget);
  }

  const handleClose = event => {
    setAnchorEl(null)
  }
  const handleMobileClose = event => {
    setMobileAnchorEl(null);
  }
  return (
    <Box sx={{
      flexGrow: 1
    }}>
      <AppBar>
        <Toolbar>
          <IconButton>
            <MenuIcon/>
          </IconButton>
          <Typography variant='body1' sx={{display: {xs:'none', md:'block'}}}>
            Johort
          </Typography>
          <Box sx={{flexGrow:1}}/>
          <Box sx={{marginRight: '3rem', display: {xs: 'none', md: 'flex'}}}>
            <IconButton sx={{marginRight: '1rem'}}>
              <Badge badgeContent={5} color='success'>
                <MailIcon/>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={10} color='secondary' overlap='circular'>
                <NotificationsIcon/>
              </Badge>
            </IconButton>
            <IconButton onClick={handleClick}>
              <Avatar alt='Kennedy' src='/static/images/kennedy.jpg'/>
            </IconButton>
          </Box>
          <Box sx={{display:{xs:'flex', md:'none'}}}>
            <IconButton onClick={handleMobileMenuClick}>
              <MoreIcon/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Admin Profile Menu is displayed when Avatar is clicked */}
      <AdminProfile open={open} anchorEl={anchorEl} onClick={handleClose} />
      {/* Mobile Menu is displayed on small screen when MoreIcon is clicked */}
      <MobileMenu open={openMobileMenu} anchorEl={mobileAchorEl} onClick={handleMobileClose} />
    </Box>
  )
}