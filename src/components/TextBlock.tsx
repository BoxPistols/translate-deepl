import React from 'react'
import { styled } from '@mui/system'
import copy from 'copy-to-clipboard'
import Tooltip from '@mui/material/Tooltip'

const CopyButton = styled('button')(() => ({
  // backgroundColor: '#f1f1f1',
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
  func: (text: string) => string
  noSymbols?: boolean
}

const Container = styled('div')(() => ({
  border: '2px solid #ccc',
  padding: '8px',
  // userSelect: 'all',
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
  func,
  noSymbols,
}) => {
  const processedContent = func(content)
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

  // const formattedResult = `"${formattedContent}": "${result}"`
  // const formattedContentOutput = `"${formattedContent}": "${content}"`

  return (
    <>
      <Head4>
        {title} <Small>{subtitle}</Small>
      </Head4>
      <Container>
        {content && result && (
          <>
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
            <br />
            {/* {formattedResult} */}
            {/* <br /> */}
            {/* {formattedContentOutput} */}
            <br />
            <Tooltip title="Copied!" open={showTooltip}>
              <CopyButton onClick={() => handleCopy(result, content)}>
                Copy to clipboard
              </CopyButton>
            </Tooltip>
          </>
        )}
      </Container>
    </>
  )
}

export default TextBlock
