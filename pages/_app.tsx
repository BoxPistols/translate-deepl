import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { theme } from '../theme'
import '../src/styles/globals.css'
import BaseLayout from '@/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </BaseLayout>
  )
}

export default MyApp
