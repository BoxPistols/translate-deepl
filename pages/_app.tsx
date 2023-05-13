// _app.tsx
import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '@/theme'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <Component {...pageProps} toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default MyApp
