import { createTheme } from '@vanilla-extract/css'

export const defaultTokens = {
  buttonFillBackground: '#18181c',
  buttonFillText: '#ffffff',
  buttonFillHoverBackground: '#2e2e33',
  buttonFillHoverText: '#ffffff',
  buttonFillActiveBackground: '#000000',
  buttonFillActiveText: '#ffffff',
  buttonFillDisabledBackground: '#aaaaad',
  buttonFillDisabledText: '#ffffff',

  buttonOutlineBackground: '#ffffff',
  buttonOutlineText: '#202024',
  buttonOutlineBorder: '#202024',
  buttonOutlineHoverBackground: '#f4f4f5',
  buttonOutlineHoverText: '#202024',
  buttonOutlineHoverBorder: '#202024',
  buttonOutlineActiveBackground: '#e3e3e6',
  buttonOutlineActiveText: '#202024',
  buttonOutlineActiveBorder: '#202024',
  buttonOutlineDisabledBackground: '#ffffff',
  buttonOutlineDisabledText: '#aaaaad',
  buttonOutlineDisabledBorder: '#c7c7ca',

  buttonTextBackground: 'transparent',
  buttonTextText: '#202024',
  buttonTextHoverBackground: '#ebebee',
  buttonTextHoverText: '#202024',
  buttonTextActiveBackground: '#dddde3',
  buttonTextActiveText: '#202024',
  buttonTextDisabledBackground: 'transparent',
  buttonTextDisabledText: '#aaaaad',

  buttonSmallPaddingX: '16px',
  buttonSmallPaddingY: '8px',
  buttonSmallRadius: '10px',
  buttonSmallHeight: '36px',

  buttonMediumPaddingX: '20px',
  buttonMediumPaddingY: '12px',
  buttonMediumRadius: '11px',
  buttonMediumHeight: '44px',

  buttonLargePaddingX: '24px',
  buttonLargePaddingY: '16px',
  buttonLargeRadius: '12px',
  buttonLargeHeight: '52px',
}

export type ThemeTokens = typeof defaultTokens

export const [defaultThemeClass, themeVars] = createTheme(defaultTokens)