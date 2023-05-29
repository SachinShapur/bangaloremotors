import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const Navbar = () =>{
    const drawerWidth = 240;
    const navItems = ['Home', 'About', 'Contact'];
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const container = window !== undefined ? () => window.document.body : undefined;
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
        Bangalore Motors
        </Typography>
        <Divider />
        <List>
            <ListItem key={'Home'} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={'Home'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Products'} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={'Products'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Contact'} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={'Contact'} />
              </ListItemButton>
            </ListItem>
        </List>
      </Box>
    );
return (<div>
<AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Bangalore Motors
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button key={'Home'} sx={{ color: '#fff' }}>
                {'Home'}
              </Button>
              <Button key={'Products'} sx={{ color: '#fff' }}>
                {'Products'}
              </Button>
              <Button key={'Contact'} sx={{ color: '#fff' }}>
                {'Contact'}
              </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
</div>)
}

export default Navbar;