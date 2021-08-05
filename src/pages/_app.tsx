import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { QueryClientProvider } from "react-query";
import { Hydrate } from 'react-query/hydration'
import { SidebarDrawerProviver } from "../contexts/SidebarDrawerContext";
import { ReactQueryDevtools } from 'react-query/devtools'
import { makeServer } from "../services/mirage";
import { theme } from "../styles/theme";
import { queryClient } from "../services/queryClient";

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={theme}>
          <SidebarDrawerProviver>
            <Component {...pageProps} />
          </SidebarDrawerProviver>
        </ChakraProvider>
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
