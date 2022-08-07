import React from 'react';
import { Box, Typography } from '@mui/material';
import './styles/index.css';
import theme from 'config/theme';

const App = () => {
  return (
    <Box>
      <Typography variant='h3' sx={{ color: theme.palette.slateBlue.main }}>
        Hello Material UI 5
      </Typography>
    </Box>
  );
};

export default App;
