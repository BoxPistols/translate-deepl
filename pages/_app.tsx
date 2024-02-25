// _app.tsx
import { useEffect, useState } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import '@/styles/globals.css'
import { theme } from '@/theme'

import { CacheProvider } from '@emotion/react'
import { StyledEngineProvider } from '@mui/material/styles'
import createCache from '@emotion/cache'
import { AppBarHeader } from '@/content/AppBar'

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

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

  const cache = createCache({
    key: 'em',
    prepend: true,
    stylisPlugins: [],
  })

  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme(mode)}>
          <CssBaseline />
          <AppBarHeader>
            <Component {...pageProps} toggleTheme={toggleTheme} />
          </AppBarHeader>
        </ThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  )
}

export default MyApp
