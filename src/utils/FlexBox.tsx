import { Box, BoxProps } from '@mui/material'

interface FlexBoxProps extends BoxProps {
  fx?: boolean
  ai_c?: boolean
  jc_c?: boolean
  fd_c?: boolean
  fx_r?: boolean
  children?: React.ReactNode
}

const FlexBox = ({
  fx,
  ai_c,
  jc_c,
  fd_c,
  fx_r,
  children,
  ...rest
}: FlexBoxProps) => {
  return (
    <Box
      display={fx ? 'flex' : undefined}
      alignItems={ai_c ? 'center' : undefined}
      justifyContent={jc_c ? 'center' : undefined}
      flexDirection={fd_c ? 'column' : undefined || fx_r ? 'row' : undefined}
      {...rest}
    >
      {children}
    </Box>
  )
}

export default FlexBox
