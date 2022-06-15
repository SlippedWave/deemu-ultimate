import React from 'react';
import {
  AppBar, Box, Button, Container, Drawer, IconButton, List, ListItem, ListItemIcon,
  ListItemText, Toolbar, Typography
} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import LogInModal from '../General/LogInModal';
import UserSettings from './UserSettings'
import IsLogged from '../../Firebase/IsLogged';

const pages = [
  { id: 'Inicio', ref: '/', icon: (<HomeIcon />) },
  { id: 'Impacto', ref: '/impacto-social', icon: (<PeopleIcon />) },
  { id: 'DEEMU App', ref: '/deemu-app', icon: (<PeopleIcon />) },
  { id: 'Foro', ref: '/foro', icon: (<ForumIcon />) },
  { id: 'Comprar', ref: '/swap', icon: (<MonetizationOnIcon />) }
];

const NavBar = () => {

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, left: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 250

      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((page) => (
          <ListItem button
            key={page.id}
            component={Link}
            to={page.ref}

          >
            <ListItemIcon>
              {page.icon}
            </ListItemIcon>
            <ListItemText primary={page.id} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Button
            sx={{ mr: 2, color: 'white', display: { xs: 'none', md: 'flex' } }}
            component={Link}
            to={'/'}

          >
            <Typography
              variant="h6"
              noWrap
              component="div"

            >
              DEEMU
            </Typography>
          </Button>
          {/* Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <React.Fragment>
              <Drawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer(false)}
              >
                {list('left')}
              </Drawer>
            </React.Fragment>
          </Box>
          {/* Título para pantallas pequeñas */}
          <Button
            sx={{ flexGrow: 1, color: 'white', display: { xs: 'flex', md: 'none' }}}
            component={Link}
            to={'/'}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
            >
              DEEMU
            </Typography>
          </Button>
          {/* Menú páginas de buen tamaño */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={Link}
                to={page.ref}
              >
                {page.id}
              </Button>
            ))}
          </Box>
          <IsLogged notLogged={<LogInModal />} logged={<UserSettings />}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
