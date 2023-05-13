import React from 'react'
import { styled } from '@mui/system'

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
  userSelect: 'all',
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

  return (
    <>
      <Head4>
        {title} <Small>{subtitle}</Small>
      </Head4>
      <Container>
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
      </Container>
    </>
  )
}

export default TextBlock
