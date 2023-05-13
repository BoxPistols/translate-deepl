// _app.tsx
import React, { useEffect } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '@/theme'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    // 条件分岐でsetItemを使う
    mode === 'dark'
      ? localStorage.setItem('DeepL-API_Mode', 'light')
      : localStorage.setItem('DeepL-API_Mode', 'dark')
  }

  // ローカルストレージに保存
  useEffect(() => {
    const localMode = localStorage.getItem('DeepL-API_Mode')
    if (localMode) {
      setMode(localMode as 'dark' | 'light')
    }
  }, [])

  return (
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
      <Component {...pageProps} toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default MyApp
