import { style, styleVariants } from '@vanilla-extract/css'
import { themeVars } from '../theme/theme.css.ts'

export const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  border: '1px solid transparent',
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: 1,
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease',

  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
    '&[aria-disabled="true"]': {
      cursor: 'not-allowed',
    },
    '&:focus-visible': {
      outline: '3px solid #8080a0',
      outlineOffset: '3px',
    },
  },
})

export const buttonSizes = styleVariants({
  S: {
    minWidth: '136px',
    minHeight: themeVars.buttonSmallHeight,
    padding: `${themeVars.buttonSmallPaddingY} ${themeVars.buttonSmallPaddingX}`,
    borderRadius: themeVars.buttonSmallRadius,
  },

  M: {
    minWidth: '136px',
    minHeight: themeVars.buttonMediumHeight,
    padding: `${themeVars.buttonMediumPaddingY} ${themeVars.buttonMediumPaddingX}`,
    borderRadius: themeVars.buttonMediumRadius,
  },

  L: {
    minWidth: '144px',
    minHeight: themeVars.buttonLargeHeight,
    padding: `${themeVars.buttonLargePaddingY} ${themeVars.buttonLargePaddingX}`,
    borderRadius: themeVars.buttonLargeRadius,
  },
})

export const buttonVariants = styleVariants({
  fill: {
    backgroundColor: themeVars.buttonFillBackground,
    color: themeVars.buttonFillText,

    selectors: {
      '&:hover:not(:disabled):not([aria-disabled="true"])': {
        backgroundColor: themeVars.buttonFillHoverBackground,
        color: themeVars.buttonFillHoverText,
      },

      '&:active:not(:disabled):not([aria-disabled="true"])': {
        backgroundColor: themeVars.buttonFillActiveBackground,
        color: themeVars.buttonFillActiveText,
      },

      '&:disabled': {
        backgroundColor: themeVars.buttonFillDisabledBackground,
        color: themeVars.buttonFillDisabledText,
      },

      '&[aria-disabled="true"]': {
        backgroundColor: themeVars.buttonFillDisabledBackground,
        color: themeVars.buttonFillDisabledText,
      },
    },
  },

  outline: {
    backgroundColor: themeVars.buttonOutlineBackground,
    color: themeVars.buttonOutlineText,
    borderColor: themeVars.buttonOutlineBorder,

    selectors: {
      '&:hover:not(:disabled):not([aria-disabled="true"])': {
        backgroundColor: themeVars.buttonOutlineHoverBackground,
        color: themeVars.buttonOutlineHoverText,
        borderColor: themeVars.buttonOutlineHoverBorder,
      },

      '&:active:not(:disabled):not([aria-disabled="true"])': {
        backgroundColor: themeVars.buttonOutlineActiveBackground,
        color: themeVars.buttonOutlineActiveText,
        borderColor: themeVars.buttonOutlineActiveBorder,
      },

      '&:disabled': {
        backgroundColor: themeVars.buttonOutlineDisabledBackground,
        color: themeVars.buttonOutlineDisabledText,
        borderColor: themeVars.buttonOutlineDisabledBorder,
      },

      '&[aria-disabled="true"]': {
        backgroundColor: themeVars.buttonOutlineDisabledBackground,
        color: themeVars.buttonOutlineDisabledText,
        borderColor: themeVars.buttonOutlineDisabledBorder,
      },
    },
  },

  text: {
    backgroundColor: themeVars.buttonTextBackground,
    color: themeVars.buttonTextText,

    selectors: {
      '&:hover:not(:disabled):not([aria-disabled="true"])': {
        backgroundColor: themeVars.buttonTextHoverBackground,
        color: themeVars.buttonTextHoverText,
      },

      '&:active:not(:disabled):not([aria-disabled="true"])': {
        backgroundColor: themeVars.buttonTextActiveBackground,
        color: themeVars.buttonTextActiveText,
      },

      '&:disabled': {
        backgroundColor: themeVars.buttonTextDisabledBackground,
        color: themeVars.buttonTextDisabledText,
      },

      '&[aria-disabled="true"]': {
        backgroundColor: themeVars.buttonTextDisabledBackground,
        color: themeVars.buttonTextDisabledText,
      },
    },
  },
})