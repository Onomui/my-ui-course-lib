import type { ReactNode } from 'react'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { defaultTokens, themeVars } from './theme.css.ts'
import type { ThemeTokens } from './theme.css.ts'
import { TokensContext, useThemeTokens } from './useThemeTokens'

interface ThemeContextProps {
  children: ReactNode
  tokens?: Partial<ThemeTokens>
}

export function ThemeContext({
  children,
  tokens = {},
}: ThemeContextProps) {
  const parentTokens = useThemeTokens()

  const currentTokens = {
    ...defaultTokens,
    ...parentTokens,
    ...tokens,
  }

  return (
    <TokensContext.Provider value={currentTokens}>
      <div style={assignInlineVars(themeVars, currentTokens)}>
        {children}
      </div>
    </TokensContext.Provider>
  )
}