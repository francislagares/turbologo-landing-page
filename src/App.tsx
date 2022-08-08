import React from 'react';
import { Box, Typography } from '@mui/material';
import './styles/index.css';
import { Button } from 'components';
import theme from 'config/theme';

const App = () => {
  return (
    <Box>
      <Typography variant='h2' sx={{ color: theme.palette.slateBlue.main }}>
        Hello Material UI 5
      </Typography>
      <Button>Open</Button>
    </Box>
  );
};

export default App;
