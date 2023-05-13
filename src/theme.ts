// theme.ts
import { createTheme, Theme } from '@mui/material'

export const theme = (mode: 'light' | 'dark'): Theme =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#3f51b5', // あなたのプライマリカラー
      },
      secondary: {
        main: '#f50057', // あなたのセカンダリカラー
      },
      background: {
        default: mode === 'light' ? '#ffffff' : '#2c2c2c',
        paper: mode === 'light' ? '#ffffff' : '#424242',
      },
    },
  })
