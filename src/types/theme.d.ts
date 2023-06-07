import 'styled-components'
import { THEME } from 'components/styles/theme'

declare module 'styled-components' {
  type Theme = typeof THEME
  export interface DefaultTheme extends Theme {}
}