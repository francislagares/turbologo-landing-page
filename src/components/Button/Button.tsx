import React from 'react';
import MuiButton from '@mui/material/Button';
import { Theme } from '@mui/material/styles';

interface IButtonProps {
  children: React.ReactNode;
}

const styles = {
  btn: (theme: Theme) => ({
    background: theme.palette.slateBlue.main,
    borderRadius: '8px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '20px',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    padding: '20px 60px',
    '&:hover': {
      background: '#646ab0',
    },
  }),
};

const Button = ({ children }: IButtonProps) => {
  return <MuiButton sx={styles.btn}>{children}</MuiButton>;
};

export default Button;
