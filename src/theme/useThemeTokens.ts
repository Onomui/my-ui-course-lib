import { createContext, useContext } from 'react'
import type { ThemeTokens } from './theme.css.ts'

export const TokensContext = createContext<ThemeTokens | null>(null)

export function useThemeTokens() {
  return useContext(TokensContext)
}