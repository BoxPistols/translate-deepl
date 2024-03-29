import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import FlexBox from '@/utils/FlexBox'
import { Typography } from '@mui/material'
import React, { createContext, useContext } from 'react'

const ColorModeContext = createContext({ toggleColorMode: () => {} })

const ToggleTheme = ({ toggleTheme }) => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <>
      <FlexBox
        fx
        ai_c
        jc_e
        // height={32}
        height={2}
        pt={1}
        px={1}
        width={'100%'}
        onClick={toggleTheme}
      >
        {/* // ダークモード切り替えボタン */}
        <Typography variant="caption" mr={0} onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
        </Typography>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </FlexBox>
    </>
  )
}
export default ToggleTheme
