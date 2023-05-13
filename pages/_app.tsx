import React from 'react'
import { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'

import { ThemeProvider } from '@mui/material'
import BaseLayout from '@/Layout'
import '../src/styles/globals.css'
import { theme } from '@/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark')

  React.useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) {
      setMode(localTheme as 'light' | 'dark')
    }
  }, [])

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', newMode)
      return newMode
    })
  }

  return (
    <BaseLayout toggleTheme={toggleTheme} mode={mode}>
      <CssBaseline />

      <ThemeProvider theme={theme(mode)}>
        <Component {...pageProps} />
      </ThemeProvider>
    </BaseLayout>
  )
}

export default MyApp
