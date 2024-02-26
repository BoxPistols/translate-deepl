import { Box, Toolbar, Typography } from '@mui/material'

// import {
//   ChevronLeft as ChevronLeftIcon,
//   ChevronRight as ChevronRightIcon,
// } from '@mui/icons-material'

import { AppBar } from './AppBarUtil'
// import { AppBarSideNav } from './AppBarSideNav'

import { ReactNode } from 'react'
import Link from 'next/link'

// Type
type Props = {
  children: ReactNode
}

export const AppBarHeader = ({ children }: Props) => {
  // const [open, setOpen] = useState(true)

  // const handleDrawerOpen = () => {
  //   setOpen(!open)
  // }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="toggle drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton> */}
          <Typography variant="h6" noWrap component="div">
            <Link href="/">Deep Translate for i18n & json</Link>
          </Typography>
        </Toolbar>
      </AppBar>

      {/* <AppBarSideNav open={open} /> */}

      <Box component="main" sx={{ flexGrow: 1, mt: { xs: 3, md: 2 }, py: 8, px: { xs: 1, md: 2, lg: 3 } }}>
        {children}
      </Box>
    </Box>
  )
}
