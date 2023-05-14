import { Box, BoxProps } from '@mui/material'

interface FlexBoxProps extends BoxProps {
  fx?: boolean
  ai_c?: boolean
  ai_s?: boolean
  jc_s?: boolean
  jc_c?: boolean
  jc_fs?: boolean
  jc_e?: boolean
  jc_sp_bw?: boolean
  jc_sp_ar?: boolean
  jc_sp_ec?: boolean
  jc_sp_ev?: boolean
  jc_bl?: boolean
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
  jc_s,
  jc_c,
  jc_fs,
  jc_e,
  jc_sp_bw,
  jc_sp_ar,
  jc_sp_ec,
  jc_sp_ev,
  jc_bl,
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
        jc_s
          ? 'flex-start'
          : undefined || jc_c
          ? 'center'
          : undefined || jc_e
          ? 'flex-end'
          : undefined || jc_sp_bw
          ? 'space-between'
          : undefined || jc_sp_ar
          ? 'space-around'
          : undefined || jc_sp_ev
          ? 'space-evenly'
          : undefined || jc_bl
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
