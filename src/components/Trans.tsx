import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Box, Button, TextField, Typography } from '@mui/material'
const API = `${process.env.NEXT_PUBLIC_API_KEY}`

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

    try {
      // fetch 関数を使って API を叩く
      const response = await fetch(
        `https://api-free.deepl.com/v2/translate?auth_key=${API}`,
        {
          // fetch 関数の第二引数にオプションを指定する
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          // body には、翻訳したいテキストを入れる
          body: `text=${encodeURIComponent(
            // inputText.replace(/\s+/g, ' ') で、連続する空白を1つの空白に変換する
            inputText.replace(/\s+/g, ' '),
          )}&source=JA&target_lang=EN`,
        },
      )

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      setTranslatedText(data.translations[0].text)
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

  // Capitalize 先頭（最初の1文字）を大文字、以降を小文字
  let capitalize = function (str: string) {
    if (typeof str !== 'string' || !str) return str
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }

  // lowerCamel
  function toLowerCamelCase(str: string) {
    if (typeof str !== 'string' || !str) return str
    // スペース、ダッシュ、アンダースコアを削除し、文字列を単語に分割する
    const words = str.replace(/[\s-_/\\]+/g, ' ').split(' ')

    // 空の単語を削除する
    const validWords = words.filter((word) => word && word.length > 0)

    // 各単語の最初の文字を大文字にし、残りを小文字に変換する
    const camelCaseWords = validWords.map((word, index) => {
      const firstLetter =
        index === 0 ? word[0].toLowerCase() : word[0].toUpperCase()
      const restOfWord = word.slice(1).toLowerCase()
      return firstLetter + restOfWord
    })

    // 単語を結合して lower CamelCase 文字列を作成する
    const lowerCamelCaseStr = camelCaseWords.join('')
    return lowerCamelCaseStr
  }

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ my: 4 }}
      >
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          sx={{ width: '100%' }}
        >
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
        </Box>
      </Box>

      {/* Capitalize */}
      <Box>
        <div className={styles.head4}>
          Capitalize{' '}
          <small style={{ fontSize: '12px' }}>
            先頭（最初の1文字）を大文字、以降を小文字
          </small>
        </div>
        {/* <p style={{ margin: '8px' }}> */}
        <div
          style={{
            border: '2px solid #ccc',
            padding: '8px',
            userSelect: 'all',
            marginBottom: 16,
            marginLeft: 16,
          }}
        >
          {'"'}
          {/* {capitalize. */}
          {capitalize(translatedText.replace(/\s+/g, ' '))}
          {'"'}: {'"'}
          {inputText}
          {'"'}
          <br />
          {'"'}
          {capitalize(translatedText.replace(/\s+/g, ' '))}
          {'"'}: {'"'}
          {capitalize(translatedText.replace(/\s+/g, ' '))}
          {/* {translatedText} */}
          {'"'}
        </div>

        {/* lowerCamel */}
        <div className={styles.head4}>
          lowerCamel{' '}
          <small style={{ fontSize: '12px' }}>先頭小文字のcamelCase</small>
        </div>
        <div
          style={{
            border: '2px solid #ccc',
            padding: '8px',
            userSelect: 'all',
            marginBottom: 16,
            marginLeft: 16,
          }}
        >
          {'"'}
          {toLowerCamelCase(translatedText)}
          {'"'}: {'"'}
          {inputText}
          {'"'}
          <br />
          {'"'}
          {toLowerCamelCase(translatedText)}
          {'"'}: {'"'}
          {translatedText}
          {'"'}
        </div>

        {/* All UpperCamel */}
        <div className={styles.head4}>
          All UpperCamel{' '}
          <small style={{ fontSize: '12px' }}>単語ごとの先頭大文字</small>
        </div>
        <div
          style={{
            textTransform: 'capitalize',
            border: '2px solid #ccc',
            padding: '8px',
            userSelect: 'all',
            marginBottom: 16,
            marginLeft: 16,
          }}
        >
          {'"'}
          {/* {capitalize. */}
          {translatedText.replace(/\s+/g, ' ')}
          {'"'}: {'"'}
          {inputText}
          {'"'}
          <br />
          {'"'}
          {translatedText.replace(/\s+/g, ' ')}
          {'"'}: {'"'}
          {translatedText}
          {'"'}
        </div>

        <div className={styles.head4}>
          lower-kebabl{' '}
          <small style={{ fontSize: '12px' }}>小文字のケバブ</small>
        </div>
        <div
          style={{
            textTransform: 'lowercase',
            border: '2px solid #ccc',
            padding: '8px',
            userSelect: 'all',
            marginBottom: 16,
            marginLeft: 16,
          }}
        >
          {'"'}
          {translatedText.replace(/\s+/g, '-')}
          {'"'}: {'"'}
          {inputText}
          {'"'}
          <br />
          {'"'}
          {translatedText.replace(/\s+/g, '-')}
          {'"'}: {'"'}
          {translatedText}
          {'"'}
        </div>

        <div className={styles.head4}>
          snake-case{' '}
          <small style={{ fontSize: '12px' }}>小文字のスネークケース</small>
        </div>
        <div
          style={{
            textTransform: 'lowercase',
            border: '2px solid #ccc',
            padding: '8px',
            userSelect: 'all',
            marginBottom: 16,
            marginLeft: 16,
          }}
        >
          {'"'}
          {translatedText.replace(/\s+/g, '_')}
          {'"'}: {'"'}
          {inputText}
          {'"'}
          <br />
          {'"'}
          {translatedText.replace(/\s+/g, '_')}
          {'"'}: {'"'}
          {translatedText}
          {'"'}
        </div>
      </Box>
    </div>
  )
}
