import { useState, FormEvent, useEffect, useRef } from 'react'
import { Box, Button, Paper, TextField, Typography, useTheme, styled } from '@mui/material'
import { translateText } from '@/api/translateAPI'

import FlexBox from '@/utils/FlexBox'
import TextBlock from '@/components/TextBlock'

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: 'grid',
  // ブレークポイントごとのスタイルを設定
  gridTemplateColumns: '1fr', // デフォルト
  marginBottom: theme.spacing(3),
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  boxShadow: '6px 6px 12px 0 rgba(13, 31, 88, 0.1)',
  borderRadius: theme.spacing(1),
  [theme.breakpoints.up('xs')]: {
    gridTemplateColumns: '1fr',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100],
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? 'inherit' : theme.palette.grey[300],
}))

export const Translate = () => {
  const theme = useTheme()

  const [inputText, setInputText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [helperText, setHelperText] = useState('')

  const handleTranslate = async (e?: FormEvent) => {
    // フォームのデフォルト送信動作を防ぐ
    e?.preventDefault()

    if (!inputText) {
      setHelperText('翻訳したい日本語を入れてください')
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

  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (formRef.current) {
      formRef.current.focus()
    }
  }, [])

  return (
    <>
      <Paper
        sx={{
          mb: 3,
          p: 2,
          boxShadow: '6px 6px 12px 0 rgba(13, 31, 88, 0.1)',
          borderRadius: 2,
          position: 'sticky',
          top: 44,
          left: 0,
          zIndex: 1,
          backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : 'white',
          border: '1px solid',
          borderColor: theme.palette.mode === 'dark' ? 'inherit' : theme.palette.grey[300],
        }}
      >
        <form onSubmit={handleTranslate} ref={formRef}>
          <FlexBox fx fw jc_sp_bw ai_c gap={2} p={3} sx={{ display: { xs: 'block', md: 'flex' } }}>
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
                label={'翻訳したい日本語を入れてください'}
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                // InputLabelProps={{ shrink: false }}
                placeholder="翻訳キーワード"
                size="small"
                fullWidth
                autoFocus={true}
                sx={{
                  mr: { md: 0.25 },
                  mb: { xs: 1, md: 0 },
                  flexGrow: 1,
                  minWidth: { xs: '100%', md: '30vw' },
                  maxWidth: { xs: '100%', md: 800 },
                  width: 'auto',
                  '.MuiInputBase-input:-webkit-autofill': {
                    WebkitBoxShadow:
                      theme.palette.mode === 'dark' ? '0 0 0 1000px #222 inset' : '0 0 0 1000px white inset',
                    WebkitTextFillColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
                    CaretColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
                  },
                }}
              />
              <Button
                type="submit" // ボタンのtypeをsubmitに設定
                variant="contained"
                sx={{
                  minWidth: 120,
                  height: 42,
                  boxShadow: '6px 6px 12px 0 rgba(13, 31, 88, 0.4)',
                }}
              >
                JA{' to '}EN / 変換
              </Button>
            </Box>
            <FlexBox fx jc_e>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={clear}
                sx={{
                  minWidth: 80,
                  height: 42,
                  boxShadow: '6px 6px 12px 0 rgba(13, 31, 88, 0.1)',
                }}
              >
                クリア
              </Button>
            </FlexBox>
          </FlexBox>

          {helperText && (
            <FlexBox fx jc_e mt={0.5}>
              <Box display={{ xs: 'block', md: 'flex' }} justifyContent={{ md: 'center' }}>
                <Typography
                  variant="caption"
                  m={0.5}
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

      {/* ---------- 翻訳結果 ---------- */}

      {/* ----- snake ----- */}
      <FlexBox fx jc_c ai_c pt={3} pb={1}>
        <Typography variant="h5" color="text.secondary">
          snake_case
        </Typography>
      </FlexBox>

      {/* lower_snake */}
      <StyledPaper>
        <TextBlock
          title="lower_snake"
          subtitle="小文字のスネーク"
          content={translatedText}
          result={inputText}
          transformType="snakeCase"
        />
        {/* lower-kebab */}
        <TextBlock
          title="lower-kebab"
          subtitle="小文字のケバブ"
          content={translatedText}
          result={inputText}
          transformType="kebabCase"
        />
      </StyledPaper>

      {/* ----- Camel ----- */}
      <FlexBox fx jc_c ai_c pt={3} pb={1}>
        <Typography variant="h5" color="text.secondary">
          CamelCase
        </Typography>
      </FlexBox>

      <StyledPaper>
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
      </StyledPaper>

      {/* ----- keyの空白許容 ----- */}
      <FlexBox fx jc_c ai_c pt={3} pb={1}>
        <Typography variant="h5" color="text.secondary">
          keyの空白許容
        </Typography>
      </FlexBox>

      <StyledPaper>
        {/* All lower */}
        <TextBlock
          title="lower"
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
        {/* UpperCamel */}
        <TextBlock
          title="UpperCamel"
          subtitle="単語ごとの先頭大文字"
          content={translatedText.replace(/\s+/g, ' ')}
          result={inputText}
          transformType="upperCamelCase"
        />
      </StyledPaper>
    </>
  )
}
