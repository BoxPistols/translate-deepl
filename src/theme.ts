// theme.ts
import { createTheme, Theme } from '@mui/material'

export const theme = (mode: 'light' | 'dark'): Theme =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#3f51b5',
        light: '#757de8',
      },
      secondary: {
        main: '#f50057',
        light: '#ff4081',
      },
      info: {
        main: '#2196f3',
        light: mode === 'light' ? '#c5d9ea' : '#3e4953',
      },
      background: {
        default: mode === 'light' ? '#ffffff' : '#2c2c2c',
        paper: mode === 'light' ? '#ffffff' : '#424242',
      },
      text: {
        primary: mode === 'light' ? '#404040' : '#f9f9f9',
        secondary: mode === 'light' ? '#757575' : '#f5f5f5',
      },
      common: {
        black: '#212121',
        white: '#f9f9f9',
      },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
      },
    },
  })
