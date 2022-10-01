import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      50: "#FFFFFF",
      100: "#F5F8FA",
      200: "#DADADA",
      600: "#999999",
      700: "#47585B",
      900: "#000000"
    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.900'
      }
    }
  }
})