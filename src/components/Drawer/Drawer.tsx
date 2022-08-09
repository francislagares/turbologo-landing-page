import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/system';

import close from 'assets/img/close.svg';
import Navbar from 'components/Navbar/Navbar';

interface IDrawerProps {
  open: boolean;
  onClose: () => void;
}

const Drawer = ({ open, onClose }: IDrawerProps) => {
  return (
    <MuiDrawer
      PaperProps={{
        sx: { widht: '100%' },
      }}
      anchor={'left'}
      open={open}
      onClose={onClose}
    >
      <Box sx={{ padding: '2px' }}>
        <IconButton onClick={onClose} sx={{ padding: 0 }}>
          <img src={close} />
        </IconButton>
      </Box>
      <Box sx={{ padding: '44px' }}>
        <Navbar />
      </Box>
      Drawer
    </MuiDrawer>
  );
};

export default Drawer;
