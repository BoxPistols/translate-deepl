import { ReactNode } from 'react'
import { IconButton } from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'

interface BaseLayoutProps {
  toggleTheme: () => void
  children: ReactNode
  mode: 'light' | 'dark'
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  mode,
  toggleTheme,
}) => {
  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="mode toggle"
        onClick={toggleTheme}
      >
        {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
      </IconButton>
      {children}
    </>
  )
}

export default BaseLayout
