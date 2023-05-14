// themes.js
import { darkTheme } from './darkTheme'
import { lightTheme } from './lightTheme'

// themes.js
export const customTheme = (mode: string) => {
  return mode ? darkTheme : lightTheme
}
