import React, { PropsWithChildren, useContext, useEffect } from 'react'

export type ColorMode = 'light' | 'dark'

const ThemeContext = React.createContext<{
  colorMode?: ColorMode
  setColorMode: (value: ColorMode) => void
}>({ setColorMode: () => {} })

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [colorMode, rawSetColorMode] = React.useState<ColorMode | undefined>(
    undefined,
  )

  useEffect(() => {
    const root = window.document.documentElement
    rawSetColorMode(root.classList.contains('light') ? 'light' : 'dark')
  }, [])

  const setColorMode = (newValue: ColorMode) => {
    const root = window.document.documentElement
    root.removeAttribute('style')
    root.classList.remove('light')
    root.classList.remove('dark')
    root.classList.add(newValue)
    rawSetColorMode(newValue)
    localStorage.setItem('color-mode', newValue)
  }

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  return useContext(ThemeContext)
}

export { ThemeContext, ThemeProvider, useTheme }
