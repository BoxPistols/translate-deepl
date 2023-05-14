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

const TextBlockWrapper = styled(Paper)(({ theme }) => ({
  position: 'relative',
  borderRadius: '4px',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#121212' : '#ccc',
  backgroundColor: theme.palette.mode === 'dark' ? '#212121' : '#fcfcfc',
  padding: '8px 16px',
  marginBottom: '8px',
  '&:last-child': {
    marginBottom: 0,
  },
}))

const CopyButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  border: 'none',
  padding: '6px 12px',
  fontSize: '12px',
  cursor: 'pointer',
  borderRadius: '4px',
}))

const Head4 = styled('h4')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 'bold',
  margin: 0,
  marginBottom: '6px',
  borderBottom: '1px solid ',
  borderColor: theme.palette.mode === 'dark' ? '#121212' : '#ccc',
  width: 'fit-content',
  paddingBottom: '2px',
}))

const Small = styled('small')(() => ({
  fontSize: '12px',
}))

const TextBlock: React.FC<TextBlockProps> = ({
  title,
  subtitle,
  content,
  result,
  transformType,
  noSymbols,
}) => {
  const processedContent = transformText(content, transformType)
  const formattedContent = noSymbols
    ? processedContent.replace(/[-_]/g, '')
    : processedContent

  const [showTooltip, setShowTooltip] = React.useState(false)

  const handleCopy = (result: string, content: string) => {
    const textToCopy = `"${formattedContent}": "${result}"\n"${formattedContent}": "${content}"`
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

  return (
    <>
      <TextBlockWrapper>
        <Head4>
          {title} <Small>{subtitle}</Small>
        </Head4>
        {content && result && (
          <Box>
            <FlexBox>
              {'"'}
              {formattedContent}
              {'"'}: {'"'}
              {result}
              {'"'}
              <br />
              {'"'}
              {formattedContent}
              {'"'}: {'"'}
              {content.toLocaleLowerCase()}
              {'"'}
            </FlexBox>

            <Tooltip title="Copied!" open={showTooltip}>
              <FlexBox
                sx={{
                  width: 'fit-content',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                }}
              >
                <CopyButton onClick={() => handleCopy(result, content)}>
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
