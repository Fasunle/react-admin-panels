import { 
  Box, 
  MenuItem, 
  MenuList, 
  IconButton,
  Typography,
} from '@mui/material';
import { 
  Dashboard as DashboardIcon,
  People as CustomerIcon,
  ShowChartOutlined as AnalyticsIcon,
  Shop2Sharp as ProductsIcon
 } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default ()=> {
  return (
    <Box sx={{
      flex: 0.15,
      display: {xs: 'none', md: 'flex'},
      flexDirection: 'column',
      justifyContent: 'space-arouind',
      alignItems: 'center',
      overflowY: 'auto',
      overflowX: 'none',
      minHeight: 'calc(100vh - 5rem)'
      }}
      >
      <MenuList>
        <MenuItem component={Link} to="/">
          <IconButton>
            <DashboardIcon color='primary' sx={{marginRight: '0.2rem'}} />
          </IconButton>
          <Typography>Dashboard</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/customers">
          <IconButton>
            <CustomerIcon color='primary'  sx={{marginRight: '0.2rem'}}/>
          </IconButton>
          <Typography>Customers</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/products">
          <IconButton>
            <ProductsIcon color='primary'  sx={{marginRight: '0.2rem'}}/>
          </IconButton>
          <Typography>Products</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/analytics">
          <IconButton>
            <AnalyticsIcon color='primary'  sx={{marginRight: '0.2rem'}}/>
          </IconButton>
          <Typography>Analytics</Typography>
        </MenuItem>
      </MenuList>
    </Box>
  )
}