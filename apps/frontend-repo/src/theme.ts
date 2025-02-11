'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#52e04c',
    },
    secondary: {
      main: '#ff7500',
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});

export default theme