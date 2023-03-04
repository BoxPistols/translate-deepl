import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import { FC, ReactNode } from 'react'

interface BaseLayoutProps {
  children?: ReactNode
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {children}
    </Box>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node,
}

export default BaseLayout
