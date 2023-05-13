import React from 'react'
import { styled } from '@mui/system'
import copy from 'copy-to-clipboard'
import Tooltip from '@mui/material/Tooltip'
import FlexBox from '@/utils/FlexBox'
import { transformText, TextTransformType } from '@/utils/stringConverters'

const CopyButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  border: 'none',
  padding: '6px 12px',
  fontSize: '12px',
  cursor: 'pointer',
}))

interface TextBlockProps {
  title: string
  subtitle: string
  content: string
  result: string
  transformType: TextTransformType
  noSymbols?: boolean
}

const Container = styled('div')(() => ({
  border: '2px solid #ccc',
  padding: '8px',
  marginBottom: 16,
  marginLeft: 16,
}))

const Head4 = styled('h4')(() => ({
  fontSize: '16px',
  fontWeight: 'bold',
  margin: 0,
  marginBottom: '8px',
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
      <Head4>
        {title} <Small>{subtitle}</Small>
      </Head4>
      <Container sx={{ position: 'relative', p: 2 }}>
        {content && result && (
          <>
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
              {content}
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
                  Copy clipboard
                </CopyButton>
              </FlexBox>
            </Tooltip>
          </>
        )}
      </Container>
    </>
  )
}

export default TextBlock
