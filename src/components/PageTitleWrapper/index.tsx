import { Box, styled } from '@mui/material'
import { ReactNode } from 'react'

const PageTitle = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(3, 4)};
`,
)

interface Types {
  children?: ReactNode
}

export const PageTitleWrapper = ({ children }: Types) => {
  return (
    <>
      <PageTitle className="MuiPageTitle-wrapper">{children}</PageTitle>
    </>
  )
}
