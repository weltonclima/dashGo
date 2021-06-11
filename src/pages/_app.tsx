import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/dist/next-server/lib/router/router"
import { SidebarDrawerProviver } from "../contexts/SidebarDrawerContext"
import { theme } from "../styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProviver>
        <Component {...pageProps} />
      </SidebarDrawerProviver>
    </ChakraProvider>
  )
}

export default MyApp
