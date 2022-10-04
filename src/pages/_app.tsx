import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import "../styles/styles.css";
import "swiper/css/bundle";
import { makeServer } from '../services/mirage';

if (process.env.NODE_ENV === 'development'){
  makeServer();
}
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
    
  )
}

export default MyApp
