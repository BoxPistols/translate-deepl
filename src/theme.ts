import { createTheme, Theme } from '@mui/material'

export const theme = (mode: 'light' | 'dark'): Theme => {
  // テキストと背景の色を設定
  const textColor = mode === 'light' ? '#000000' : '#ffffff'
  const backgroundColor = mode === 'light' ? '#ffffff' : '#303030'

  // テーマを作成
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#3f51b5', // あなたのプライマリカラー
      },
      secondary: {
        main: '#f50057', // あなたのセカンダリカラー
      },
      background: {
        default: backgroundColor,
        paper: backgroundColor,
      },
      text: {
        primary: textColor,
        secondary: textColor,
      },
      // その他のカラー設定
    },
    // その他のテーマ設定
  })
}
