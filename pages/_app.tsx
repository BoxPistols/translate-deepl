import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import { theme } from '../theme'
import 'styles/debug.scss'
import 'React-Redux__Emotion-CSS__Atomic-Design/src/style/token/_index.scss'
import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
