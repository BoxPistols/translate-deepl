import { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import {
  capitalize,
  toAllLowerCase,
  toLowerCamelCase,
  toLowerKebabCase,
  toLowerSnakeCase,
  toUpperCamelCase,
} from '@/utils/stringConverters'
import { translateText } from '@/api/translateAPI'

import FlexBox from '@/utils/FlexBox'
import TextBlock from './TextBlock'

export const Translate = () => {
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
      <FlexBox fx jc_c ai_c my={4}>
        <FlexBox fx jc_c fd_c sx={{ width: '100%' }}>
          <Box>
            <TextField
              // id="outlined-basic"
              label="翻訳したい日本語を入れてください"
              variant="outlined"
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="翻訳したい日本語を入れてください"
              sx={{ mr: 1, width: '60%' }}
            />

            <Button
              variant="outlined"
              size="large"
              onClick={handleTranslate}
              sx={{ height: 56, mr: 1 }}
            >
              日{' -> '}英 変換
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={clear}
              sx={{ height: 56 }}
            >
              クリア
            </Button>
          </Box>
          {/* helper */}
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
        </FlexBox>
      </FlexBox>

      <Box>
        {/* Capitalize */}
        <TextBlock
          title="Capitalize"
          subtitle="先頭（最初の1文字）を大文字、以降を小文字"
          content={translatedText.replace(/\s+/g, ' ')}
          result={inputText}
          func={capitalize}
        />
        {/* lowerCamel */}
        <TextBlock
          title="lowerCamel"
          subtitle="先頭小文字のcamelCase"
          content={translatedText}
          result={inputText}
          func={toLowerCamelCase}
        />
        {/* All UpperCamel */}{' '}
        <TextBlock
          title="All UpperCamel"
          subtitle="単語ごとの先頭大文字"
          content={translatedText.replace(/\s+/g, ' ')}
          result={inputText}
          func={toUpperCamelCase}
        />
        {/* All lower */}
        <TextBlock
          title="All lower"
          subtitle="全て小文字"
          content={translatedText.replace(/\s+/g, ' ')}
          result={inputText}
          func={toAllLowerCase}
        />
        {/* All lower-kebab */}
        <TextBlock
          title="All lower-kebab"
          subtitle="小文字のケバブ"
          content={translatedText}
          result={inputText}
          func={toLowerKebabCase}
        />
        {/* All lower_snake */}
        <TextBlock
          title="All lower_snake"
          subtitle="小文字のスネーク"
          content={translatedText}
          result={inputText}
          func={toLowerSnakeCase}
        />
      </Box>
    </>
  )
}
