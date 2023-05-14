import { useState } from 'react'
import {
  Box,
  Button,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { translateText } from '@/api/translateAPI'

import FlexBox from '@/utils/FlexBox'
import TextBlock from '@/components/TextBlock'
import { theme } from '@/theme'
import { useTheme } from '@mui/material/styles'

export const Translate = () => {
  const muiTheme = useTheme()

  const [inputText, setInputText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [helperText, setHelperText] = useState('')

  // 翻訳 API を叩く fetch 関数 async/await を使う
  const handleTranslate = async () => {
    if (!inputText) {
      setHelperText('翻訳したい日本語を入れてください。')
      return
    }
    setHelperText('')
    // 翻訳 API を叩く fetch 関数 async/await を使う try/catch でエラー処理 例外処理 をする

    try {
      const translated = await translateText(inputText)
      setTranslatedText(translated)
    } catch (error) {
      console.log(error)
      setHelperText('翻訳に失敗しました。もう一度お試しください。')
    }
  }

  // クリアボタンを押したときの処理 setInputText と setTranslatedText を空にする
  const clear = () => {
    setTranslatedText('')
    setInputText('')
    setHelperText('')
  }

  return (
    <>
      <Paper
        elevation={4}
        sx={{
          p: 2,
          borderRadius: 2,
          mb: 3,
        }}
      >
        <FlexBox fx jc_c fd_c my={1}>
          <FlexBox fx jc_c ai_s fw width="100%" gap={1}>
            <TextField
              id="input-trans-word"
              label={
                <InputLabel shrink>翻訳したい日本語を入れてください</InputLabel>
              }
              type="text"
              value={inputText}
              placeholder="翻訳したい日本語を入れてください"
              size="small"
              onChange={(e) => setInputText(e.target.value)}
              sx={{ mr: 0.25, minWidth: '60%', flexGrow: 1 }}
            />
            <Button
              variant="contained"
              size="small"
              onClick={handleTranslate}
              sx={{ minWidth: 120 }}
            >
              日{' -> '}英 変換
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={clear}
              sx={{ minWidth: 80 }}
            >
              クリア
            </Button>
          </FlexBox>
          {/* helper */}
          {helperText && (
            <Box>
              <Typography
                variant="caption"
                ml={1}
                sx={{
                  '&.MuiTypography-root': {
                    color: 'crimson',
                  },
                }}
              >
                {helperText}
              </Typography>
            </Box>
          )}
        </FlexBox>
      </Paper>

      {/* 翻訳結果 */}
      <Paper
        elevation={4}
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)',
            xl: 'repeat(3, 1fr)',
          },
          p: 3,
          borderRadius: 2, // gridTemplateColumns: 'repeat(1, 1fr)',
          // [muiTheme.breakpoints.up('md')]: {
          //   gridTemplateColumns: 'repeat(1, 1fr)',
          // },
          // [muiTheme.breakpoints.up('lg')]: {
          //   gridTemplateColumns: 'repeat(2, 1fr)',
          // },
          // [muiTheme.breakpoints.up('xl')]: {
          //   gridTemplateColumns: 'repeat(3, 1fr)',
          // },
        }}
      >
        {/* Capitalize */}
        <TextBlock
          title="Capitalize"
          subtitle="先頭（最初の1文字）を大文字、以降を小文字"
          content={translatedText.replace(/\s+/g, ' ')}
          result={inputText}
          transformType="capitalize"
        />
        {/* lowerCamel */}
        <TextBlock
          title="lowerCamel"
          subtitle="先頭小文字のcamelCase"
          content={translatedText}
          result={inputText}
          transformType="lowerCamelCase"
        />
        {/* All UpperCamel */}
        <TextBlock
          title="All UpperCamel"
          subtitle="単語ごとの先頭大文字"
          content={translatedText.replace(/\s+/g, ' ')}
          result={inputText}
          transformType="upperCamelCase"
        />
        {/* UpperCamel_Snake */}
        <TextBlock
          title="UpperCamel_Snake"
          subtitle="先頭大文字のスネーク"
          content={translatedText}
          result={inputText}
          transformType="upperCamelSnake"
        />
        {/* All lower */}
        <TextBlock
          title="All lower"
          subtitle="全て小文字"
          content={translatedText.replace(/\s+/g, ' ')}
          result={inputText}
          transformType="allLowerCase"
        />
        {/* All lower-kebab */}
        <TextBlock
          title="All lower-kebab"
          subtitle="小文字のケバブ"
          content={translatedText}
          result={inputText}
          transformType="kebabCase"
        />
        {/* All lower_snake */}
        <TextBlock
          title="All lower_snake"
          subtitle="小文字のスネーク"
          content={translatedText}
          result={inputText}
          transformType="snakeCase"
        />
      </Paper>
    </>
  )
}
