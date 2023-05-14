// lightTheme.ts
import { createTheme, Theme } from '@mui/material'

export const lightTheme: Theme = createTheme({
  // ここに light テーマに対応する設定を記述
  palette: {
    mode: 'light',
    primary: {
      main: '#3f51b5',
      light: '#757de8',
    },
    secondary: {
      main: '#f50057',
      light: '#ff4081',
    },
    error: {
      main: '#f44336',
      light: '#e57373',
    },
    info: {
      main: '#2196f3',
      light: '#c5d9ea',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#404040',
      secondary: '#757575',
    },
    common: {
      black: '#212121',
      white: '#f9f9f9',
    },
  },
  typography: {
    fontFamily: 'Helvetica, sans-serif',
    // WebkitFontSmoothing: 'antialiased',
    // MozOsxFontSmoothing: 'grayscale',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.334,
      letterSpacing: '0em',
    },
    h6: {
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
    button: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'inherit',
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
    },
    overline: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'inherit',
    },
  },

  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.875rem',
          lineHeight: 1.75,
          letterSpacing: '0.02857em',
        },
      },
    },
  },
})
