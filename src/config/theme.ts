import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

const theme = createTheme({
  palette: {
    primary: {
      main: '#686868',
    },
    slateBlue: {
      main: '#777FEB',
    },
  },
  typography: {
    h2: {
      fontFamily: 'Montserrat',
      fontWeight: 700,
      fontSize: '32px',
      lineHeight: '39px',
      textTransform: 'capitalize',
      color: '#000000',
      [breakpoints.up('md')]: {
        fontSize: '64px',
        lineHeight: '78px',
      },
    },
    body1: {
      fontFamily: 'Montserrat',
      fontWeighteight: 400,
      fontSize: '14px',
      lineHeight: '17px',
      [breakpoints.up('md')]: {
        fontSize: '24px',
        lineHeight: '29px',
        fontWeight: 500,
      },
    },
  },
});

export default theme;
