import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'components/styles/global-style'
import { THEME } from 'components/styles/theme'
import { useBreakpoint, BreakpointContext } from 'components/styles/use-breakpoint'

export default function App({ Component, pageProps }: AppProps) {
  const breakpoint = useBreakpoint()
  
  return <BreakpointContext.Provider value={breakpoint}>
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </BreakpointContext.Provider>
}
