// theme.ts
import { createTheme, Theme } from '@mui/material'
// colorTokens.ts
import { colorData } from '@/utils/colorToken'

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display1: true
    display2: true
  }
}

export const breakpoints = {
  values: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 1280,
    xl: 1536,
    xxl: 1920,
  },
}

// ===== Typography =====
const baseFontSize = 16

const fontWeight = {
  normal: 400,
  medium: 500,
  bold: 700,
}
const lineHeight = {
  small: 1.5,
  medium: 1.75,
  large: 2.0,
}

export const theme = (mode: 'light' | 'dark'): Theme =>
  createTheme({
    // ===== BreakPoint =====
    // default: lg
    breakpoints: {
      values: {
        xs: breakpoints.values.xs,
        sm: breakpoints.values.sm,
        md: breakpoints.values.md,
        lg: breakpoints.values.lg,
        xl: breakpoints.values.xl,
      },
    },

    // Color
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? colorData.primary.main : colorData.primary.light,
        light: mode === 'light' ? colorData.primary.lighter : colorData.primary.light,
        dark: mode === 'light' ? colorData.primary.dark : colorData.primary.dark,
      },
      secondary: {
        main: mode === 'light' ? colorData.secondary.main : colorData.secondary.light,
        light: mode === 'light' ? colorData.secondary.lighter : colorData.secondary.light,
        dark: mode === 'light' ? colorData.secondary.dark : colorData.secondary.dark,
      },
      error: {
        main: mode === 'light' ? colorData.error.main : colorData.error.dark,
        light: mode === 'light' ? colorData.error.lighter : colorData.error.light,
        dark: mode === 'light' ? colorData.error.dark : colorData.error.dark,
      },
      info: {
        main: mode === 'light' ? colorData.info.main : colorData.info.dark,
        light: mode === 'light' ? colorData.info.light : colorData.info.light,
        dark: mode === 'light' ? colorData.info.dark : colorData.info.dark,
      },
      background: {
        default: mode === 'light' ? '#f9f9f9' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#212121',
      },
      text: {
        primary: mode === 'light' ? '#212121' : '#f9f9f9',
        secondary: mode === 'light' ? '#757575' : '#f9f9f9',
      },
      common: {
        black: '#29313c',
        white: '#fff',
      },
      // mode === 'light' ? colorData.primary.dark : colorData.grey[100],
    },

    typography: {
      allVariants: {
        fontSize: baseFontSize,
        fontWeight: fontWeight.normal,
        lineHeight: lineHeight.medium,
        // color: colorData.text.primary,
        fontFamily:
          ' "Inter", "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", "BIZ UDPゴシック", "Noto Sans JP", Helvetica, Arial, sans-serif !important',
        textTransform: 'inherit',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'antialiased',
      },

      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
      h1: {
        fontWeight: 700,
        fontSize: '2.5rem',
        lineHeight: 1.167,
        letterSpacing: '-0.01562em',
      },
      h2: {
        fontWeight: 700,
        fontSize: '2rem',
        lineHeight: 1.2,
        letterSpacing: '-0.00833em',
      },
      h3: {
        fontWeight: 700,
        fontSize: '2rem',
        lineHeight: 1.167,
        letterSpacing: '0em',
      },
      h4: {
        fontWeight: 700,
        fontSize: '2rem',
        lineHeight: 1.235,
        letterSpacing: '0.00735em',
      },
      h5: {
        fontWeight: 700,
        fontSize: '1.5rem',
        lineHeight: 1.334,
        letterSpacing: '0em',
      },
      h6: {
        fontWeight: 700,
        fontSize: '1.25rem',
        lineHeight: 1.6,
        letterSpacing: '0.0075em',
      },
      subtitle1: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.75,
        letterSpacing: '0.00938em',
      },
      subtitle2: {
        fontWeight: 500,
      },
      body1: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
      },
      body2: {
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.43,
      },
      caption: {
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 1.66,
      },
      overline: {
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 2.66,
        letterSpacing: '0.08333em',
        textTransform: 'inherit',
      },
      button: {
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: 1.75,
        letterSpacing: '0.02857em',
        textTransform: 'inherit',
        whiteSpace: 'nowrap',
      },
    },
    // Components
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: false, // No more ripple, on the whole application 💣!
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.75,
            letterSpacing: '0.02857em',
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: 0,
            paddingRight: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
            maxWidth: '100%',
            '@media (min-width: 600px)': {
              maxWidth: '100%',
            },
            '@media (min-width: 960px)': {
              maxWidth: '100%',
            },
            '@media (min-width: 1280px)': {
              maxWidth: '100%',
            },
            '@media (min-width: 1920px)': {
              maxWidth: '100%',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            height: 48,
            backgroundColor: mode === 'light' ? colorData.grey[100] : colorData.grey[900],
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            minHeight: 48,
            '@media(min-width:0px)': {
              minHeight: 48,
            },
            '.MuiTypography-root': {
              color: mode === 'light' ? colorData.primary.dark : '#f9f9f9',
            },
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            color: mode === 'light' ? colorData.primary.dark : colorData.grey[100],
            backgroundColor: mode === 'light' ? '#f9f9f9' : '#121212',
          },
        },
      },
    },
  })
