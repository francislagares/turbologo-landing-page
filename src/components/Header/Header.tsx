import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import styles from './styles';
import burger_menu from 'assets/img/burger_menu.svg';
import logo_desk from 'assets/img/logo_desc.svg';
import logo_mob from 'assets/img/logo_mob.svg';

import { Drawer, Navbar } from 'components';

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar position='static' sx={styles.appBar}>
      <Container maxWidth='xl' sx={styles.container}>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        <Toolbar disableGutters>
          <Box component='a' href='/' sx={styles.logoDesk}>
            <img src={logo_desk} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
            <IconButton
              size='large'
              color='inherit'
              aria-label='menu'
              onClick={() => setOpenDrawer(true)}
            >
              <img src={burger_menu} />
            </IconButton>
          </Box>
          <Box component='a' href='/' sx={styles.logoMob}>
            <img src={logo_mob} />
          </Box>
          <Box
            component='a'
            href='/'
            sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}
          >
            <Navbar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
