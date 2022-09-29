import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { StateContextProvider } from "../context/ContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <StateContextProvider>
        <Component {...pageProps} />
      </StateContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
