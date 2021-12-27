import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#47585B",
      "800": "#494949",
      "700": "#999999",
      "500": "#DADADA",
      "300": "#F5F8FA",
    },
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.300',
        color: 'gray.800',
      }
    }
  }
})
