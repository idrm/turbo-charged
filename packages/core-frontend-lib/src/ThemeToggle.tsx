import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'ui'

const ThemeToggle = () => {
  const { colorMode, setColorMode } = useTheme()

  if (!colorMode) {
    return null
  }

  const isDark = colorMode === 'dark'

  return (
    <button
      tw="focus:outline-none fill-current text-subdued hover:text"
      onClick={() => setColorMode(isDark ? 'light' : 'dark')}
    >
      {isDark ? <MoonIcon tw="w-6 h-6" /> : <SunIcon tw="w-6 h-6" />}
    </button>
  )
}

export default ThemeToggle
