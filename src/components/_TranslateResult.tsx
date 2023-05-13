import { Paper } from '@mui/material'
import TextBlock from '@/components/TextBlock'
import { TextTransformType } from '@/utils/stringConverters'

const initialBlocks: {
  [key: string]: any
  transformType: TextTransformType
}[] = [
  {
    id: 'capitalize',
    title: 'Capitalize',
    subtitle: '先頭（最初の1文字）を大文字、以降を小文字',
    transformType: 'capitalize',
  },
  {
    id: 'lowerCamel',
    title: 'lowerCamel',
    subtitle: '先頭小文字のcamelCase',
    transformType: 'lowerCamelCase',
  },
  {
    id: 'allUpperCamel',
    title: 'All UpperCamel',
    subtitle: '単語ごとの先頭大文字',
    transformType: 'upperCamelCase',
    noSymbols: true,
  },
  {
    id: 'allLower',
    title: 'All lower',
    subtitle: '全て小文字',
    transformType: 'allLowerCase',
    noSymbols: true,
  },
  {
    id: 'allLowerKebab',
    title: 'All lower-kebab',
    subtitle: '小文字のケバブ',
    transformType: 'kebabCase',
  },
  {
    id: 'allLowerSnake',
    title: 'All lower_snake',
    subtitle: '小文字のスネーク',
    transformType: 'snakeCase',
  },
]

export const TranslateResult = ({ inputText, translatedText }) => {
  return (
    <>
      {/* 翻訳結果 */}
      <Paper
        elevation={4}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          flexDirection: 'column',
          gap: 1,
          p: 3,
          borderRadius: 2,
        }}
      >
        {initialBlocks.map((block, _index) => (
          <TextBlock
            key={block.id}
            title={block.title}
            subtitle={block.subtitle}
            content={translatedText.replace(/\s+/g, ' ')}
            result={inputText}
            transformType={block.transformType}
            noSymbols={block.noSymbols}
          />
        ))}
      </Paper>
    </>
  )
}
