import { 
  Box, 
  MenuItem, 
  MenuList, 
  IconButton,
  Link as MuiLink
} from '@mui/material';
import { 
  Dashboard as DashboardIcon,
  People as CustomerIcon,
  ShowChartOutlined as AnalyticsIcon,
  Shop2Sharp as ProductsIcon
 } from '@mui/icons-material';


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
        <MenuItem>
          <IconButton>
            <DashboardIcon color='primary' sx={{marginRight: '0.5rem'}} />
            <MuiLink underline='none' href='/'>Dashboard</MuiLink>
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton>
            <CustomerIcon color='primary'  sx={{marginRight: '0.5rem'}}/>
            <MuiLink underline='none' href='/customers'>Customers</MuiLink>
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton>
            <ProductsIcon color='primary'  sx={{marginRight: '0.5rem'}}/>
            <MuiLink underline='none' href='/products'>Products</MuiLink>
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton>
            <AnalyticsIcon color='primary'  sx={{marginRight: '0.5rem'}}/>
            <MuiLink underline='none' href='/analytics'>Analytics</MuiLink>
          </IconButton>
        </MenuItem>
      </MenuList>
    </Box>
  )
}