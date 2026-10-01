export type Theme = 'light' | 'dark'

// Keep in sync with the inline script in index.html
const STORAGE_KEY = 'portfolio-26:theme'

const isTheme = (value: unknown): value is Theme =>
  value === 'light' || value === 'dark'

export function getStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return isTheme(value) ? value : null
  } catch {
    return null
  }
}

export function storeTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Storage can be unavailable (private mode); the theme still applies for this visit
  }
}

export const systemThemeQuery = () =>
  window.matchMedia('(prefers-color-scheme: dark)')

export const getSystemTheme = (): Theme =>
  systemThemeQuery().matches ? 'dark' : 'light'
