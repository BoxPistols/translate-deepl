import React from 'react'
import { styled } from '@mui/system'
import copy from 'copy-to-clipboard'
import Tooltip from '@mui/material/Tooltip'
import FlexBox from '@/utils/FlexBox'
import { transformText, TextTransformType } from '@/utils/stringConverters'

import { Box, Paper } from '@mui/material'

interface TextBlockProps {
  title: string
  subtitle: string
  content: string
  result: string
  transformType: TextTransformType
  noSymbols?: boolean
}

const TextBlockWrapper = styled(Paper)(() => ({
  position: 'relative',
  borderRadius: '4px',
  padding: '8px 16px',
  marginBottom: '8px',
  boxShadow: '6px 6px 12px 0 rgba(13, 31, 88, 0.1)',
}))

const CopyButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  border: 'none',
  padding: '6px 12px',
  fontSize: '12px',
  cursor: 'pointer',
  borderRadius: '4px',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}))

const Head4 = styled('h4')(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'normal',
  margin: 8,
  marginBottom: 0,
  width: 'fit-content',
  small: {
    color: theme.palette.text.secondary,
    fontWeight: 'normal',
  },
  '@media (max-width: 640px)': {
    fontSize: '1.2rem',
  },
}))

const Small = styled('small')(() => ({
  fontSize: '12px',
  '@media (max-width: 640px)': {
    display: 'none!important',
  },
}))

const SpanStyled = styled('span')(({ theme }) => ({
  color: theme.palette.success.light,
  fontWeight: '700',
}))

const TextBlock: React.FC<TextBlockProps> = ({ title, subtitle, content, result, noSymbols, transformType }) => {
  const processedContent = transformText(content, transformType)
  const formattedContent = noSymbols ? processedContent.replace(/[-_]/g, '') : processedContent

  const [showTooltip, setShowTooltip] = React.useState(false)

  // const handleCopy = (result: string, content: string) => {
  //   const textToCopy = `"${formattedContent}": "${result}"\n"${formattedContent}": "${content}"`
  //   copy(textToCopy)
  //   setShowTooltip(true)
  // }
  // TODO: Capitalize Pattern
  const handleCopy = (result: string, content: string) => {
    // `result` を小文字に変換し、それをクリップボードにコピーする
    const textToCopy = `"${formattedContent}": "${
      result.charAt(0).toUpperCase() + result.slice(1).toLowerCase()
    }"\n"${formattedContent}": "${content.toLowerCase()}"`
    copy(textToCopy)
    setShowTooltip(true)
  }

  React.useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [showTooltip])

  const Quote = <SpanStyled>{'"'}</SpanStyled>
  const QuoteColon = (
    <SpanStyled>
      {'"'}: {'"'}
    </SpanStyled>
  )

  return (
    <>
      <TextBlockWrapper>
        <Head4>
          {title} <Small>{subtitle}</Small>
        </Head4>
        {content && result && (
          <Box p={1.5} lineHeight={1.8}>
            <FlexBox>
              {Quote}
              {formattedContent}
              {QuoteColon}
              {result}
              {Quote}
              <br />
              {Quote}
              {formattedContent}
              {QuoteColon}
              {content.toLocaleLowerCase()}
              {Quote}
            </FlexBox>

            <Tooltip title="Copied!" open={showTooltip} placement="top-end" arrow>
              <FlexBox
                sx={{
                  width: 'fit-content',
                  position: 'absolute',
                  top: -8,
                  right: -6,
                  boxShadow: '8px 8px 12px 0 rgba(13, 31, 88, 0.2)',
                }}
              >
                <CopyButton onClick={() => handleCopy(result, content)} sx={{ px: 3, py: 1 }}>
                  Copy
                </CopyButton>
              </FlexBox>
            </Tooltip>
          </Box>
        )}
      </TextBlockWrapper>
    </>
  )
}

export default TextBlock
