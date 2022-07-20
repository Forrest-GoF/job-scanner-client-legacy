import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
