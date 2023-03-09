import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <ThirdwebProvider  activeChain={ChainId.Mumbai}> <Component {...pageProps} /></ThirdwebProvider>
}

export default MyApp
