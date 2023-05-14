import { ElementType } from 'react'
import { Box, Grid, Typography, useTheme } from '@mui/material'
import { SxProps } from '@mui/system'
import { PageTitleWrapper } from '@/components/PageTitleWrapper'

/**
 * 中見出しとサブタイトルをまとめて表示するコンポーネントです。
 * Example: <TitleSet headingText={t('見出し表示')} subtitleText={t('サブタイトルで説明文追加')} />
 * @param variant 見出し 未指定時:div フォントの大きさレベル。ページ最初はh2、その後はHTMLレベルに応じてh3、h4...
 * @param component 見出しのコンポーネント/HTML要素 未指定時:h2 基本的にはh1~h6
 * @param headingText 見出しの文字列
 * @param variantSubTitle 見出し下のサブタイトルバリエーション 未指定時:subtitle2
 * @param subtitleText サブタイトル本文
 * @param additionalProps 右端に追加するコンポーネントが必要な時に設置(例: ボタン。基本無くても良い）
 */
// INFO: *variantのh1はMainTitleSetでのみ設置可能としたいです
interface TitleSetProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline'
    | 'inherit'
  component?: ElementType
  headingText?: string
  subtitleText?: string
  variantSubTitle?:
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline'
    | 'inherit'
  additionalProps?: JSX.Element
  sxHeader?: SxProps
  sxSubTitle?: SxProps
  sx?: SxProps
  gutterBottom?: boolean
}

// 中見出しとサブタイトル
export const TitleSet = ({
  variant,
  component,
  headingText,
  variantSubTitle,
  subtitleText,
  additionalProps,
  sxHeader,
  sxSubTitle,
  sx,
  gutterBottom,
}: TitleSetProps) => {
  const theme = useTheme()
  return (
    <>
      <Box
        sx={{
          margin: theme.spacing(0),
          '.MuiPageTitle-wrapper': {
            m: theme.spacing(0),
            p: theme.spacing(0),
            // background: 'transparent',
            boxShadow: 'none',
          },
          ...sx,
        }}
      >
        <PageTitleWrapper>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 1 }}
            mb={1}
          >
            <Grid item>
              {/* 見出し */}
              <Typography
                variant={variant}
                component={component ? component : 'div'}
                sx={sxHeader}
                gutterBottom={gutterBottom}
                style={{ lineHeight: 1.3, fontSize: '1.5rem' }}
              >
                {headingText}
              </Typography>

              {/* サブタイトル */}
              <Typography
                variant={variantSubTitle ? variantSubTitle : 'subtitle2'}
                sx={sxSubTitle}
                style={{ lineHeight: 1.4 }}
              >
                {subtitleText}
              </Typography>
            </Grid>
            {/* 見出しと同じ階層内の右端に、ボタンなどのコンポーネントを置く時用 */}
            <Grid item>{additionalProps}</Grid>
          </Grid>
        </PageTitleWrapper>
      </Box>
    </>
  )
}
