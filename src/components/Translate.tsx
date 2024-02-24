import { useState, FormEvent } from 'react'
import {
  Box,
  Button,
  InputLabel,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import { translateText } from '@/api/translateAPI'

import FlexBox from '@/utils/FlexBox'
import TextBlock from '@/components/TextBlock'

export const Translate = () => {
  const theme = useTheme()

  const [inputText, setInputText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [helperText, setHelperText] = useState('')

  const handleTranslate = async (e?: FormEvent) => {
    // フォームのデフォルト送信動作を防ぐ
    e?.preventDefault()

    if (!inputText) {
      setHelperText('翻訳したい日本語を入れてください。')
      return
    }
    setHelperText('')

    try {
      const translated = await translateText(inputText)
      setTranslatedText(translated)
    } catch (error) {
      console.log(error)
      setHelperText('翻訳に失敗しました。もう一度お試しください。')
    }
  }

  const clear = () => {
    setTranslatedText('')
    setInputText('')
    setHelperText('')
  }

  return (
    <>
      <Paper elevation={4} sx={{ p: 2, borderRadius: 2, mb: 3 }}>
        <form onSubmit={handleTranslate}>
          <FlexBox
            fx
            fw
            jc_sp_bw
            ai_c
            gap={2}
            p={3}
            sx={{ display: { xs: 'block', md: 'flex' } }}
          >
            <Box
              display={{ xs: 'block', md: 'flex' }}
              flexWrap={{
                xs: 'wrap',
                md: 'nowrap',
              }}
              gap={2}
            >
              <TextField
                id="input-trans-word"
                label={
                  <InputLabel shrink>
                    翻訳したい日本語を入れてください
                  </InputLabel>
                }
                type="text"
                value={inputText}
                placeholder="翻訳したい日本語を入れてください"
                size="small"
                fullWidth
                onChange={(e) => setInputText(e.target.value)}
                InputLabelProps={{ shrink: false }}
                sx={{
                  mr: { md: 0.25 },
                  mb: { xs: 1, md: 0 },
                  flexGrow: 1,
                  minWidth: { xs: '100%', md: '40vw', lg: '50vw' },
                  maxWidth: { xs: '100%' },
                }}
              />
              <Button
                type="submit" // ボタンのtypeをsubmitに設定
                variant="contained"
                sx={{ minWidth: 120, height: 38 }}
              >
                日{' -> '}英 変換
              </Button>
            </Box>
            <FlexBox fx jc_e>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={clear}
                sx={{ minWidth: 80, height: 38 }}
              >
                クリア
              </Button>
            </FlexBox>
          </FlexBox>

          {helperText && (
            <FlexBox fx jc_e mt={2}>
              <Box
                display={{ xs: 'block', md: 'flex' }}
                justifyContent={{ md: 'center' }}
                sx={{
                  p: 1,
                }}
              >
                <Typography
                  variant="caption"
                  m={1}
                  sx={{
                    '&.MuiTypography-root': {
                      color: theme.palette.error.main,
                    },
                  }}
                >
                  {helperText}
                </Typography>
              </Box>
            </FlexBox>
          )}
        </form>
      </Paper>

      {/* 翻訳結果 */}
      {/* ----- snake ----- */}
      <FlexBox fx jc_c ai_c pt={3} pb={1}>
        <Typography variant="h5" color="text.secondary">
          snake_case
        </Typography>
      </FlexBox>
      <Paper
        elevation={4}
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)',
            xl: 'repeat(2, 1fr)',
          },
          p: 3,
          borderRadius: 2,
        }}
      >
        {/* All lower_snake */}
        <TextBlock
          title="All lower_snake"
          subtitle="小文字のスネーク"
          content={translatedText}
          result={inputText}
          transformType="snakeCase"
        />
        {/* All lower-kebab */}
        <TextBlock
          title="All lower-kebab"
          subtitle="小文字のケバブ"
          content={translatedText}
          result={inputText}
          transformType="kebabCase"
        />
      </Paper>

      {/* ----- Camel ----- */}
      <FlexBox fx jc_c ai_c pt={3} pb={1}>
        <Typography variant="h5" color="text.secondary">
          CamelCase
        </Typography>
      </FlexBox>
      <Paper
        elevation={4}
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)',
            xl: 'repeat(2, 1fr)',
          },
          p: 3,
          borderRadius: 2,
        }}
      >
        {/* lowerCamel */}
        <TextBlock
          title="lowerCamel"
          subtitle="先頭小文字のcamelCase"
          content={translatedText}
          result={inputText}
          transformType="lowerCamelCase"
        />
        {/* UpperCamel_Snake */}
        <TextBlock
          title="UpperCamel_Snake"
          subtitle="先頭大文字のスネーク"
          content={translatedText}
          result={inputText}
          transformType="upperCamelSnake"
        />
      </Paper>

      <FlexBox fx jc_c ai_c pt={3} pb={1}>
        <Typography variant="h5" color="text.secondary">
          keyの空白許容
        </Typography>
      </FlexBox>

      <Paper
        elevation={4}
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)',
            xl: 'repeat(3, 1fr)',
          },
          p: 3,
          borderRadius: 2,
        }}
      >
        {/* All lower */}
        <TextBlock
          title="All lower"
          subtitle="全て小文字"
          content={translatedText.replace(/\s+/g, ' ')}
          result={inputText}
          transformType="allLowerCase"
        />
        {/* Capitalize */}
        <TextBlock
          title="Capitalize"
          subtitle="先頭（最初の1文字）を大文字、以降を小文字"
          content={translatedText.replace(/\s+/g, ' ')}
          result={inputText}
          transformType="capitalize"
        />
        {/* All UpperCamel */}
        <TextBlock
          title="All UpperCamel"
          subtitle="単語ごとの先頭大文字"
          content={translatedText.replace(/\s+/g, ' ')}
          result={inputText}
          transformType="upperCamelCase"
        />
      </Paper>
    </>
  )
}
