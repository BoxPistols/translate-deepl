import { Box, BoxProps } from '@mui/material'

interface FlexBoxProps extends BoxProps {
  fx?: boolean
  ai_c?: boolean
  ai_s?: boolean
  jc_c?: boolean
  jc_fs?: boolean
  jc_e?: boolean
  jc_sp_bw?: boolean
  jc_sp_ar?: boolean
  jc_sp_ec?: boolean
  fd_c?: boolean
  fx_r?: boolean
  fw?: boolean
  nw?: boolean
  children?: React.ReactNode
}

const FlexBox = ({
  fx,
  ai_c,
  ai_s,
  jc_c,
  jc_fs,
  jc_e,
  jc_sp_bw,
  jc_sp_ar,
  jc_sp_ec,
  fd_c,
  fx_r,
  fw,
  nw,
  children,
  ...rest
}: FlexBoxProps) => {
  return (
    <Box
      display={fx ? 'flex' : undefined || 'block'}
      alignItems={ai_c ? 'center' : undefined || ai_s ? 'stretch' : undefined}
      justifyContent={
        jc_c
          ? 'flex-start'
          : undefined || jc_fs
          ? 'center'
          : undefined || jc_c
          ? 'flex-end'
          : undefined || jc_e
          ? 'space-between'
          : undefined || jc_sp_bw
          ? 'space-around'
          : undefined || jc_sp_ar
          ? 'space-evenly'
          : undefined || jc_sp_ec
          ? 'baseline'
          : undefined
      }
      flexDirection={fd_c ? 'column' : undefined || fx_r ? 'row' : undefined}
      flexWrap={fw ? 'wrap' : undefined || nw ? 'nowrap' : undefined}
      {...rest}
    >
      {children}
    </Box>
  )
}

export default FlexBox
